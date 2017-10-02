import 'polymer/polymer.html'
import 'paper-input/paper-input.html'
import 'paper-button/paper-button.html'
import './landing-page.html'

class LandingPage extends Polymer.Element {
  static get is () { return 'landing-page' }

  submit () {
    var pin = this.shadowRoot.querySelector('#pin').value
    window.history.pushState({}, '', '/page/' + pin)
    window.dispatchEvent(new CustomEvent('location-changed'))
  }
}

customElements.define(LandingPage.is, LandingPage)