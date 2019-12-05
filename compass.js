import { html, LitElement } from "https://unpkg.com/lit-element?module"
import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module"

class CompassElement extends LitElement {

    static get is() {
        return "app-router"
    }

    static get properties() {
        return {
            compassConfig: {
                type: Object
            },
            currentRouteHtmlObj: {
                type: Object
            }
        }
    }

    constructor() {
        super()

        this.currentRouteHtmlObj = html``
        this.compassConfig = {}
        this.isInitializing = true
    }

    render() {
        return this.currentRouteHtmlObj
    }

    /**
     * Create a new Compass instance.
     *   
     * @param {Object} compassConfig                    - This object contains all the needed info to make routing work.
     * @param {Object} compassConfig.onChange           - Do something when the route changes.
     * @param {Object} compassConfig.routes             - Dictionary with path as key and HTML tag of the component to show as value 
     * @param {Object} compassConfig.transitionsEnabled - Enable or disable transitions. Use the CSS file in 'example/css/router-transitions.css' as a template
     */
    init(compassConfig) {
        this.compassConfig = compassConfig
        this._checkIfConfigIsValid()

        this.currentRouteHtmlObj = this._tagToHtmlObj(compassConfig.routes["/"])

        // Start listening for route changes
        this._handleOnRouteChange()
        // Trigger refresh on first load
        window.onhashchange()

        this.addEventListener("compass-router-change-route", (event) => {
            if (event.detail && event.detail.newRoute) {
                this.changeRoute(event.detail.newRoute, event.detail.params)
            }
        })
    }

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

    _handleOnRouteChange() {
        window.onhashchange = () => {
            let path = window.location.hash.replace("#!", "")

            if (path.includes("?")) {
                path = path.split("?")[0]
            }

            if (path == "") {
                path = "/"
            }

            if (!this.compassConfig.routes[path]) {
                this._redirectTo404()
                return
            }

            let tag = this.compassConfig.routes[path]
            this._updateRootElementContent(tag)

            if (this.compassConfig.onChange) {
                this.compassConfig.onChange(path)
            }
        }
    }

    _updateRootElementContent(htmlTag) {
        if (!this.compassConfig.transitionsEnabled || this.isInitializing) {
            this.currentRouteHtmlObj = this._tagToHtmlObj(htmlTag)
            this.isInitializing = false
            return
        }

        let transitionDuration = getComputedStyle(this)
            .getPropertyValue("transition-duration")
        if (transitionDuration.includes("ms")) {
            transitionDuration = parseFloat(transitionDuration.split("ms")[0])
        } else if (transitionDuration.includes("s")) {
            transitionDuration = parseFloat(transitionDuration.split("s")[0]) * 1000
        }

        this.classList.remove("anim-in")
        this.classList.add("anim-out")
        setTimeout(() => {
            this.currentRouteHtmlObj = this._tagToHtmlObj(htmlTag)

            this.classList.remove("anim-out")
            this.classList.add("anim-in")
        }, transitionDuration)
    }

    _redirectTo404() {
        window.location.hash = "#!/404"
    }

    _tagToHtmlObj(tag) {
        let sanitizedTag = tag
            .replace("<", "")
            .replace(">", "")
            .replace("/", "")
            .replace(" ", "")

        let newHtmlContent = `<${sanitizedTag}></${sanitizedTag}>`
        return html`${unsafeHTML(newHtmlContent)}`
    }

    _checkIfConfigIsValid() {
        if (!this.compassConfig || !this.compassConfig.routes) {
            throw new Error("[Compass] Invalid compass configuration, have you sepcified the 'routes' object?")
        }

        if (!this.compassConfig.routes["/"]) {
            throw new Error("[Compass] Invalid compass configuration, root path not found. Have you specified the '/' property in the 'routes' object?")
        }

        if (!this.compassConfig.routes["/404"]) {
            console.warn("[Compass] 404 page not set")
        }
    }
}

customElements.define(CompassElement.is, CompassElement)