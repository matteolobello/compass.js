import { html, css, LitElement } from "https://unpkg.com/lit-element?module"

class BottomBarElement extends LitElement {

    static get is() {
        return "app-bottom-bar"
    }

    static get properties() {
        return {
            items: {
                type: Array
            }
        }
    }

    static get styles() {
        return css`
            :host {
                position: fixed;
                bottom: 0;
                width: 100vw;
                height: var(--bottom-bar-height);
                display: flex;
                align-items: center;
                justify-content: center;                
                border-color: rgba(0, 0, 0, 0.2);
                border-style: solid;
                border-width: 0.5px 0px 0px 0px;
            }

            ul {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
            }

            li {
                width: 100%;
                height: 100%;
                list-style: none;
                border: 0.5px rgba(0, 0, 0, 0.2) solid;
                padding-bottom: env(safe-area-inset-bottom);
            }

            li > a {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
                font-weight: bold;
                transition: background 0.25s;
                -webkit-user-select: none;
                -webkit-touch-callout: none;
            }

            li > a:focus {
                background: rgba(0, 0, 0, 0.1);
            }

            li > a > img {
                width: 26px;
                height: 26px;
                pointer-events: none;
            }

            @media (hover: hover) {
                li > a:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
            }

            @media screen and (min-width: 800px) {
                li > a {
                    flex-direction: row;
                }

                li > a > img {
                    margin-right: 8px;
                }
            }
        `
    }

    constructor() {
        super()

        this.items = []

        window.addEventListener("route-change", (event) => {
            if (event.detail && event.detail.newRoute) {
                this._onRouteChange(event.detail.newRoute)
            }
        })
    }

    render() {
        return html`
            <ul>
                ${this.items.map(item => html`
                    <li style="background: ${item.background}">
                        <a href="#!/${item.route.replace("/", "")}">
                            <img src="
                                ${
                                    item.isSelected
                                        ? item.imageUrlSelected
                                        : item.imageUrl
                                }"
                            >
                            <span style="color: ${
                                item.isSelected 
                                    ? item.selectedTextColor 
                                    : item.textColor 
                            }">${item.title}</span>
                        </a>
                    </li>
                `)}
            </ul>
        `
    }

    _onRouteChange(route) {
        this.items.forEach(item => {
            item.isSelected = item.route == route
        })
        this.requestUpdate()
    }
}

customElements.define(BottomBarElement.is, BottomBarElement)