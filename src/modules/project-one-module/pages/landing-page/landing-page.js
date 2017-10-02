import 'polymer/polymer.html'
import 'paper-input/paper-input.html'
import 'paper-button/paper-button.html'
import './landing-page.html'

class LandingPage extends Polymer.Element {
  static get is () { return 'landing-page' }

  static get properties () {
    return {
      pin: {
        type: String,
        observer: '_onPinChanged'
      },
      formattedPin: {
        type: String
      }
    }
  }

  submit () {
    window.history.pushState({}, '', '/page/' + this.pin)
    window.dispatchEvent(new CustomEvent('location-changed'))
  }

  _onValueChanged (e) {

  }

  _onPinChanged (value, oldValue) {
    if (oldValue === undefined) {
      return
    }
    if (this.formattedPin === value) {
      return
    }

    value = value.replace(/-/g, '')
    value = value.replace(/\s+/g, '')

    var formattedValue = ''
    for (var i = 0; i < value.length; i++) {
      if (i === 3) {
        formattedValue += '-'
      }

      if (i === 5) {
        formattedValue += '-'
      }

      if (i === 8) {
        formattedValue += '-'
      }

      if (i === 10) {
        formattedValue += '-'
      }
      formattedValue += value[i]
    }

    if (formattedValue.length > 17) {
      formattedValue = formattedValue.substr(0, 17)
    }
    this.formattedPin = formattedValue
    this.pin = formattedValue
  }
}

customElements.define(LandingPage.is, LandingPage)