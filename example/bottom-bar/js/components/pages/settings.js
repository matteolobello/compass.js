import { html, LitElement } from "https://unpkg.com/lit-element?module"

export class SettingsElement extends LitElement {

    static get is() {
        return "app-settings"
    }

    render() {
        return html`
            <h1>Settings</h1>
        `
    }
}

customElements.define(SettingsElement.is, SettingsElement)