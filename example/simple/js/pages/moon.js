import { html, LitElement } from "https://unpkg.com/lit-element?module";
import { sharedCss } from "./style/shared.js"

export class MoonElement extends LitElement {

    static get is() {
        return "app-moon"
    }

    static get styles() {
        return sharedCss
    }

    render() {
        return html`
            <span class="title">Moon</span>
            <br>
            <img src="img/moon.png" style="max-width: 75vw;">
        `
    }
}

customElements.define(MoonElement.is, MoonElement)