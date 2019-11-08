
# compass.js
Compass.js is a vanilla-js, dependency-free, lightweight JavaScript library that allows you to easily build single-page applications.

## Setup
Import compass.js in your index.html file.
```html
<script src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/master/compass.js"></script>
```
Configure a new Compass instance.
```js
<script>
// Create a new instance passing the root container
// selector and the Compass configuration object.
const compass = Compass.config("#app", {

	// The behavior that describes how we 
	// should handle HTML files loading.
	// If set to "start" => HTML files will be loaded at launch.
	// If set to "lazy"  => HTML files will be loaded only when needed
	//						(e.g. first time we show the route).
	//						The HTML code will be cached for next uses.
	mode: "start",

	// Optional transitions object.
	// Must contain in and out animation classes.
	transitions: {
		in: "fade-in",
		out: "fade-out"
	},
	
	onChange: function (path) {
		// Do something when the path changes.
	},
	
	// This function gets triggered only if "mode" is set to "start"
	onInit: function () {
		// Do something when Compass has been initalized.
	},
	
	// Dictionary with path as key and HTML file path to load as value.
	routes: {
		"/": "/views/home.html",
		"/earth": "/views/earth.html",
		"/moon": "/views/moon.html",
		"/sun": "/views/sun.html",
		
		// If route is not valid, redirect to 404 page.
		"/404": "/views/404.html"
	}
});
</script>
```
Handle route change from HTML.
```html
<button compass-link="/earth">Earth</button>
``` 
Programmatically change route and parameters passing.
```js
compass.changeRoute("/planet", { name: "earth" })
``` 
Programmatically get parameters.
```js
let planetName = compass.getUrlParameter("name")
``` 

<b>Note:</b> scripts inside a route will be executed every time that route is shown!
