import { css } from "https://unpkg.com/lit-element?module"

export const sharedCss = css`
    :host {
        display: inline-block;
        width: 100vw;
        height: 100%;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: black;
        color: white;
        background-image:
            radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
            radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
            radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
        background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
        background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    }

    .title {
        display: inline-block;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        padding: 16px;
        font-size: 32px;
        border-radius: 12px;
        margin-top: 32px;
    }
` 