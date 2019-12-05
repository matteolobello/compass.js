import { html, LitElement } from "https://unpkg.com/lit-element?module"
import { sharedCss } from "./style/shared.js"

export class HomeElement extends LitElement {

    static get is() {
        return "app-home"
    }

    static get styles() {
        return sharedCss
    }

    render() {
        return html`
            <span class="title">Hello, this is an example page<br>that will show you how Compass.js works. :)</span>
        `
    }
}

customElements.define(HomeElement.is, HomeElement)