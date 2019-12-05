import { html, LitElement } from "https://unpkg.com/lit-element?module"
import { sharedCss } from "./style/shared.js"

export class Error404Element extends LitElement {

    static get is() {
        return "app-404"
    }

    static get styles() {
        return sharedCss
    }

    render() {
        return html`
            <h1>Lost in space</h1>
            <button @click="${this.onHomeBtnClick}">Home</button>
        `
    }

    onHomeBtnClick() {
        let event = new CustomEvent("compass-router-change-route", {
            detail: { 
                newRoute: "/",
                params: {
                    param1: "Test1",
                    param2: "Test2"
                }
            },
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(event)
    }
}

customElements.define(Error404Element.is, Error404Element)