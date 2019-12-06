
# compass.js
Compass.js (Web Components Edition) is a lightweight JavaScript library based on LitElement that allows you to easily build single page applications.
<br>
<a href="https://musing-minsky-b105b4.netlify.com">Show example page</a>

## Setup
```html
<!DOCTYPE html>
<head>
	<!-- ... -->

    <script type="module" src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/web-components/compass.js"></script>
</head>
<body>
    <app-router></app-router>
</body>
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
