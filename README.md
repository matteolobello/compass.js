
# compass.js
Compass.js is a dependency-free, lightweight, vanilla JavaScript library that allows you to easily build single-page applications.

## Setup
Configure your HTML code.
The ```route``` attribute describes when to show that element.
Put the ```compass.js``` import to the bottom of the file just before closing the  ```<body>``` tag. It will create a new Compass instance, accessible via the ```Router``` object everywhere you need to.
Make sure to always implement the "/" and "/404" routes.
```html
<!-- 
	This example uses Web Components, 
	but the library works well everywhere. 
	You can use non-custom tags, like <div>, for example. 
	See the "examples" folder for more info. 
-->
<body>
	<app-404 route="/404"></app-404>
	<app-home route="/"></app-home>
	<app-favourites route="/favourites"></app-favourites>
	<app-settings route="/settings"></app-settings>

	<script src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/v2/compass.min.js"></script>
</body>
```
Handle route change from HTML.
```html
<button compass-link="/earth">Earth</button>
``` 
Programmatically change route and parameters passing.
```js
Router.changeRoute("/planet", { name: "earth" })
``` 
Programmatically get parameters.
```js
let planetName = Router.getUrlParameter("name")
```