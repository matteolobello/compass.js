import { html, LitElement } from "https://unpkg.com/lit-element?module"

export class FavouritesElement extends LitElement {

    static get is() {
        return "app-favourites"
    }

    render() {
        return html`
            <h1>Favourites</h1>
        `
    }
}

customElements.define(FavouritesElement.is, FavouritesElement)