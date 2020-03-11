import { LitElement } from "https://unpkg.com/lit-element?module"

export class Error404Element extends LitElement {

    static get is() {
        return "app-404"
    }

    constructor() {
        super()

        window.location.hash = "#!/"
    }
}

customElements.define(Error404Element.is, Error404Element)