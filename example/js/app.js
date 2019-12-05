import { HomeElement } from "./pages/home.js"
import { EarthElement } from "./pages/earth.js"
import { MoonElement } from "./pages/moon.js"
import { SunElement } from "./pages/sun.js"
import { Error404Element } from "./pages/404.js"

document.querySelector("app-router")
    .init({
        transitionsEnabled: true,
        onChange: function (path) {
            // Do something
        },
        routes: {
            "/": HomeElement.is,
            "/earth": EarthElement.is,
            "/moon": MoonElement.is,
            "/sun": SunElement.is,
            "/404": Error404Element.is
        }
    })
