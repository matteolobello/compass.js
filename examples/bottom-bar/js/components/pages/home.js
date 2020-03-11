import { html, LitElement } from "https://unpkg.com/lit-element?module"

export class HomeElement extends LitElement {

    static get is() {
        return "app-home"
    }

    constructor() {
        super()

        this.numbers = [...Array(100).keys()].map(x => x + 1)
    }

    render() {
        return html`
            ${this.numbers.map(num => html`<h1>${num}</h1>`)}
        `
    }
}

customElements.define(HomeElement.is, HomeElement)