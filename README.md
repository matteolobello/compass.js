
# compass.js
Compass.js is a dependency-free, lightweight, vanilla JavaScript library that allows you to easily build single-page applications.

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
