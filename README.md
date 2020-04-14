
# compass.js
Compass.js is a dependency-free, lightweight, vanilla JavaScript library that allows you to easily build single-page applications.

## Setup
Configure your HTML code.
The ```route``` attribute describes when to show that element.
Put the ```compass.js``` import to the bottom of the file just before closing the  ```<body>``` tag. It will create a new Compass instance, accessible via the ```Router``` object everywhere you need to.
Make sure to always implement the "/" and "/404" routes.
#### Web Components usage
```html
<body>
    <app-404 route="/404"></app-404>
    <app-home route="/"></app-home>
    <app-favourites route="/favourites"></app-favourites>
    <app-settings route="/settings"></app-settings>

    <script src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/v2/compass.min.js"></script>
</body>
```
#### Simple usage
```html
<body>
    <div route="/" view="./views/home.html"></div>
    <div route="/about" view="./views/about.html"></div>
    <div route="/details/user" view="./views/user-details.html"></div>
    <div route="/404" view="./views/404.html"></div>

    <script src="https://gitcdn.xyz/repo/lobellomatteo/compass.js/v2/compass.min.js"></script>
</body>
```
#### Handle route change from HTML.
```html
<button compass-link="/earth">Earth</button>
``` 
If needed, set the `new-tab` attribute to open the link in a new browser tab.
#### Programmatically change route and parameters passing.
```js
Router.changeRoute("/planet", { name: "earth" })
``` 
#### Programmatically get parameters.
```js
let planetName = Router.getUrlParameter("name")
```
