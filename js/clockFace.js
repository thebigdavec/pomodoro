const clockFaceTemplate = document.createElement('template')
clockFaceTemplate.innerHTML = `<style> .clock-face {
    width: 50vw;
    color: orange;
    background-color: grey;
    padding: 1.5em 1.5em;
    border-radius: 2em;
    margin: 0 auto 5px;
    text-align: center;
} </style>
<div class="clock-face">
<info-display><slot name="message" /></info-display>
<fixed-display><slot name="time" /></fixed-display>
</div>`

class ClockFace extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(clockFaceTemplate.content.cloneNode(true))
    }
}

window.customElements.define('clock-face', ClockFace)