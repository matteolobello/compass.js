const compass = Compass.config("#app", {
    mode: "start",
    transitions: {
        in: "fade-in",
        out: "fade-out"
    },
    onChange: function (path) {
        // Do something
    },
    onLoad: function () {
        // Do something
    },
    routes: {
        "/": "/views/home.html",
        "/earth": "/views/earth.html",
        "/moon": "/views/moon.html",
        "/sun": "/views/sun.html",
        "/404": "/views/404.html"
    }
});