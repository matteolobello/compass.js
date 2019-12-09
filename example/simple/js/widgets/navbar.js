import { html, css, LitElement } from "https://unpkg.com/lit-element?module"

export class NavBarElement extends LitElement {

    static get is() {
        return "app-nav-bar"
    }

    static get styles() {
        return css`
            :host {
                height: 66px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }

            nav {
                color: white;
                background: black;
                text-align: center;
            }
            
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }
            
            li {
                transition: all 0.3s;
                display: inline;
                list-style-type: none;
                font-weight: 700;
            }

            li > a {
                color: white;
                padding: 32px;
            }

            li > a:hover {
                cursor: pointer;
                color: rgba(255, 255, 255, 0.3);
            }
        `
    }

    render() {
        return html`
            <nav>
                <ul>
                    <li><a href="#!/earth">Earth</a></li>
                    <li><a href="#!/moon">Moon</a></li>
                    <li><a href="#!/sun">Sun</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define(NavBarElement.is, NavBarElement)