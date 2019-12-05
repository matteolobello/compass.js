import { html, LitElement } from "https://unpkg.com/lit-element?module"
import { sharedCss } from "./style/shared.js"

export class SunElement extends LitElement {

    static get is() {
        return "app-sun"
    }

    static get styles() {
        return sharedCss
    }

    render() {
        return html`
            <span class="title">Sun</span>
            <br>
            <img src="img/sun.png" style="max-width: 75vw;">
        `
    }
}

customElements.define(SunElement.is, SunElement)