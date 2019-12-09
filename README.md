
# compass.js

Compass.js (Web Components Edition) is a lightweight JavaScript library based on LitElement that allows you to easily build single page applications.
<br>
<a href="https://musing-minsky-b105b4.netlify.com">Show example page.</a>

## Setup

#### index.html
```html
<!DOCTYPE html>
<head>
    <!-- ... -->
    
    <script type="module" src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/web-components/compass.js"></script>
    <script type="module" src="js/app.js"></script>
</head>
<body>
    <app-router></app-router>
</body>
```

#### js/app.js
```js
document.querySelector("app-router")
    .init({
        // If true, make sure to import the CSS. 
        // Use example/css/router-transitions.css as a template.
        transitionsEnabled: true, 
        
        // Callback called every time the route changes.
        onChange: function (path) {
            // Do something
        },
        
        // The routes of the app.
        // Path => Custom element tag name
        routes: {
            "/": "app-home",
            "/earth": "app-earth",
            "/moon": "app-moon",
            "/sun": "app-sun",
            "/404": "app-404"
        }
    })
```

Handle route change from HTML.

```html
<a href="#!/earth">Earth</button>
``` 

Programmatically change route and parameters passing.
```js
let changeRouteEvt = new CustomEvent("compass-router-change-route", {
    detail: { 
        newRoute: "/",
        // Optional
        params: {
            test: "ok"
        }
    },
    bubbles: true,
    composed: true
})
this.dispatchEvent(changeRouteEvt)
``` 
Programmatically get parameters.
```html
<script src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/web-components/compass-util.js"></script>
```
```js
let planetName = CompassUtil.getUrlParameter("name")
```
