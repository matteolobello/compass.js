
# compass.js
Compass.js is a dependency-free, lightweight, vanilla JavaScript library that allows you to easily build single-page applications.

## Setup
The `route` attribute describes in which route the HTML element should be visible.

Put the `compass.js` import `<script>` tag to the bottom of your HTML file just before closing the `</body>` tag. It will create a new Compass instance, accessible via `window.Router` or simply `Router`.

Make sure to always implement the `/` and `/404` routes.
<hr>
#### Web Components usage
```html
<body>
    <app-404 route="/404"></app-404>
    <app-home route="/"></app-home>
    <app-favourites route="/favourites"></app-favourites>
    <app-settings route="/settings"></app-settings>

    <script src="https://raw.githack.com/matteolobello/compass.js/v2/compass.min.js"></script>
</body>
```
#### Simple usage
```html
<body>
    <div route="/" view="views/home.html"></div>
    <div route="/about" view="views/about.html"></div>
    <div route="/details/user" view="views/user-details.html"></div>
    <div route="/404" view="views/404.html"></div>

    <script src="https://raw.githack.com/matteolobello/compass.js/v2/compass.min.js"></script>
</body>
```
<hr>
#### Change route from HTML
```html
<button compass-link="/earth">Earth</button>
```
If needed, set the `new-tab` attribute to open the link in a new browser tab.
<hr>
#### Programmatically change route and parameters passing
```js
Router.changeRoute("/planet", { name: "earth" })
``` 
<hr>
#### Programmatically get parameters
```js
let planetName = Router.getUrlParameter("name")
```
<hr>
#### Listen to route change events
```js
window.addEventListener("route-change", (event) => {
    if (event.detail && event.detail.newRoute) {
        const newRoute = event.detail.newRoute
    }
})
```
<hr>
#### Do something when the route becomes visible
##### If you're using the "Simple usage" method
###### views/section-one.html
```html
<h1>Section One</h1>
<script>
    this.onRouteBecameVisible = () => {
        // The "Section One" route became visible.
        // Now you can check if you need to update the page content, for example.
    }
</script>
```
##### If you're using Web Components
###### components/section-one.html
```js
class SectionOneElement extends LitElement {

    render() {
        return html`<h1>Section One</h1>`
    }

    onRouteBecameVisible() {
        // The "Section One" route became visible.
        // Now you can check if you need to update the page content, for example.
    }
}
```