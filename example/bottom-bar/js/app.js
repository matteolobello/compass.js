import "https://gitcdn.xyz/repo/lobellomatteo/compass.js/web-components/compass.js"

import { HomeElement } from "./components/pages/home.js"
import { FavouritesElement } from "./components/pages/favourites.js"
import { SettingsElement } from "./components/pages/settings.js"
import { Error404Element } from "./components/pages/error-404.js"

import "./components/bottom-bar.js"

document.querySelector("app-bottom-bar")
    .items = [
        {
            title: "Home",
            imageUrl: "https://img.icons8.com/windows/64/000000/home-page.png",
            imageUrlSelected: "https://img.icons8.com/windows/64/FF0000/home-page.png",
            route: "/",
            textColor: "#000000",
            selectedTextColor: "#FF0000",
            background: "#FFFFFF",
            isSelected: true
        },
        {
            title: "Favourites",
            imageUrl: "https://img.icons8.com/windows/64/000000/love-circled.png",
            imageUrlSelected: "https://img.icons8.com/windows/64/FF0000/love-circled.png",
            route: "/favourites",
            textColor: "#000000",
            selectedTextColor: "#FF0000",
            background: "#FFFFFF",
            isSelected: false
        },
        {
            title: "Settings",
            imageUrl: "https://img.icons8.com/windows/64/000000/settings.png",
            imageUrlSelected: "https://img.icons8.com/windows/64/FF0000/settings.png",
            route: "/settings",
            textColor: "#000000",
            selectedTextColor: "#FF0000",
            background: "#FFFFFF",
            isSelected: false
        }
    ]

document.querySelector("app-router")
    .init({
        transitionsEnabled: true, 
        onChange: function (path) {
            document.querySelector("app-bottom-bar").onRouteChange(path)
        },
        routes: {
            "/": HomeElement.is,
            "/favourites": FavouritesElement.is,
            "/settings": SettingsElement.is,
            "/404": Error404Element.is
        }
    })