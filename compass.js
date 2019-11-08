class Compass {

    static config(rootElSelector, compassConfig) {
        return new Compass(rootElSelector, compassConfig)
    }

    /**
     * Create a new Compass instance.
     *   
     * @param {Object} $rootEl                - The element container path selector.
     * @param {Object} compassConfig          - This object contains all the needed info to make routing work.
     * @param {Object} compassConfig.onChange - Do something when the route changes.
     * @param {Object} compassConfig.onInit   - Do something when the HTML files have been loaded 
     *                                         (triggered only if "mode" is set to "start").
     * @param {string} compassConfig.mode     - The behavior that describes how we should 
     *                                         handle the HTML files loading:
     *                                         If set to "start" => HTML files will be loaded at launch.
     *                                         If set to "lazy"  => HTML files will be loaded only when needed 
     *                                                              (e.g. first time we show the route).
     *                                                              The HTML code will be cached for next uses.
     * @param {Object} compassConfig.routes   - Dictionary with path as key and html file path to load as value 
     */
    constructor(rootElSelector, compassConfig) {
        const self = this

        self.$rootEl = document.querySelector(rootElSelector)
        self.compassConfig = compassConfig

        if (!self.$rootEl) {
            console.error("[Compass] Invalid root element")
            return
        }

        if (!self.compassConfig || !self.compassConfig) {
            console.error("[Compass] Invalid compass configuration")
            return
        }

        const currentPageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1) || "index"
        if (Object.values(self.compassConfig.routes).includes(currentPageName)) {
            console.error("[Compass] Do not include the root page in paths")
            return
        }

        if (!self.compassConfig.routes["/404"]) {
            console.warn("[Compass] 404 page not set")
        }

        // This object will contain the actual HTML code for each route
        self.compassConfig.generatedRoutes = {}

        if (self.compassConfig.mode == "start") {
            // Load HTML all at once

            let itemsProcessed = 0

            let paths = Object.keys(self.compassConfig.routes)
            paths.forEach((path) => {
                fetch(self.compassConfig.routes[path])
                    .then(html => html.text())
                    .then(html => {
                        // Cache for later use
                        self.compassConfig.generatedRoutes[path] = html

                        if (++itemsProcessed == paths.length) {
                            self._handleOnRouteChange()
                            window.onhashchange()

                            if (self.compassConfig.onLoad) {
                                self.compassConfig.onLoad()
                            }
                        }
                    })
                    .catch(ex => {
                        console.error("[Compass] Error while fetching HTML content")
                        console.error(ex)
                    })
            })
        } else {
            // Default mode: lazy
            self._handleOnRouteChange()
            window.onhashchange()
        }

        document.addEventListener('click',
            (event) => {
                if (event.target.matches('[compass-link]')) {
                    event.preventDefault()
                    self.changeRoute(event.target.getAttribute("compass-link"))
                }
            }, false)
    }

    ///////// Dev-friendly methods /////////

    changeRoute(path, params = {}) {
        let newHash = "#!" + (path.startsWith("/") ? path : ("/" + path))

        let parameterNames = Object.keys(params)
        for (let i = 0; i < parameterNames.length; i++) {
            if (i == 0) {
                newHash += "?"
            } else {
                newHash += "&"
            }

            newHash += parameterNames[i] + "=" + encodeURIComponent(params[parameterNames[i]])
        }

        window.location.hash = newHash
    }

    getUrlParameter(name) {
        let queryStringArray = window.location.href.split("?")
        let queryStringParamArray = queryStringArray[1].split("&")
        let nameValue = null

        for (let i = 0; i < queryStringParamArray.length; i++) {
            let queryStringNameValueArray = queryStringParamArray[i].split("=")
            if (name == queryStringNameValueArray[0]) {
                nameValue = queryStringNameValueArray[1]
            }
        }

        return nameValue
    }

    ///////// Lib-only methods /////////

    _handleOnRouteChange() {
        const self = this

        window.onhashchange = function () {
            let path = window.location.hash.replace("#!", "")

            if (path.includes("?")) {
                path = path.split("?")[0]
            }

            if (path == "") {
                path = "/"
            }

            if (!self.compassConfig.routes[path]) {
                self._redirectTo404()
                return
            }

            let html = self.compassConfig.generatedRoutes[path]
            if (!html) {
                if (self.compassConfig.mode == "lazy") {
                    fetch(self.compassConfig.routes[path])
                        .then(html => html.text())
                        .then(html => {
                            // Cache for later uses
                            self.compassConfig.generatedRoutes[path] = html

                            self._updateRootElementContent(path, html)
                        })
                        .catch(() => {
                            self._redirectTo404()
                        })
                } else {
                    self._redirectTo404()
                }
            } else {
                self._updateRootElementContent(path, html)
            }

            if (self.compassConfig.onChange) {
                self.compassConfig.onChange(path)
            }
        }
    }

    _updateRootElementContent(path, html) {
        const self = this
        if (!self.compassConfig.transitions) {
            self.$rootEl.innerHTML = html
            return
        }

        let transitionDuration = getComputedStyle(self.$rootEl)
            .getPropertyValue("transition-duration")
        if (transitionDuration.includes("ms")) {
            transitionDuration = parseFloat(transitionDuration.split("ms")[0])
        } else if (transitionDuration.includes("s")) {
            transitionDuration = parseFloat(transitionDuration.split("s")[0]) * 1000
        }

        self.$rootEl.classList.remove(self.compassConfig.transitions.in)
        self.$rootEl.classList.add(self.compassConfig.transitions.out)
        setTimeout(() => {
            self._setRootElementInnerHTML(path, html)

            self.$rootEl.classList.remove(self.compassConfig.transitions.out)
            self.$rootEl.classList.add(self.compassConfig.transitions.in)
        }, transitionDuration)
    }

    _setRootElementInnerHTML(path, html) {
        const self = this

        self.$rootEl.innerHTML = html

        if (path == "/") {
            // Do not reload JS in index.html
            return
        }

        self.$rootEl.querySelectorAll("script").forEach(oldScript => {
            const newScript = document.createElement("script")
            oldScript.attributes.forEach(attr => {
                newScript.setAttribute(attr.name, attr.value)
            })
            newScript.appendChild(document.createTextNode(oldScript.innerHTML))
            oldScript.parentNode.replaceChild(newScript, oldScript)
        })
    }

    _redirectTo404() {
        window.location.hash = "#!/404"
    }
}