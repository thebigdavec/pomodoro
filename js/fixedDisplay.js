const fixedDisplayTemplate = document.createElement('template')
fixedDisplayTemplate.innerHTML = `<style> #display {
    font-family: "Nova Mono", monospace;
    color: orange;
    background-color: black;
    font-size: 2em;
    padding: .5em 1.5em;
    border-radius: 1em;
    margin: 0 auto 5px;
    text-align: center;
} </style>
<div id="display"><slot /></div>`

class FixedDisplay extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(fixedDisplayTemplate.content.cloneNode(true))
    }
}

window.customElements.define('fixed-display', FixedDisplay)