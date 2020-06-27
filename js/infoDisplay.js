const template = document.createElement('template')
template.innerHTML = `<style> #display {
    color: orange;
    background-color: black;
    font-size: 2em;
    padding: .5em 1.5em;
    border-radius: 1em;
    margin: 0 auto 5px;
    text-align: center;
} </style>
<div id="display">Display</div>`

class InfoDisplay extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('#display').innerText = this.getAttribute('info')
    }
}

window.customElements.define('info-display', InfoDisplay)