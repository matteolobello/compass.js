import { html, LitElement } from "https://unpkg.com/lit-element?module"
import { sharedCss } from "./style/shared.js"

export class EarthElement extends LitElement {

    static get is() {
        return "app-earth"
    }

    static get styles() {
        return sharedCss
    }

    render() {
        return html`
            <span class="title">Earth</span>
            <br>
            <img src="img/earth.png" style="max-width: 75vw;">
        `
    }
}

customElements.define(EarthElement.is, EarthElement)