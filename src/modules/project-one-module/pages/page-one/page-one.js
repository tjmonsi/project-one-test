import 'polymer/polymer.html'
import 'paper-input/paper-input.html'
import 'paper-button/paper-button.html'
import 'marked-element/marked-element.html'
import 'google-map/google-map.html'
import 'google-map/google-map-marker.html'
import '../../fonts/page-font.html'
import marked from 'marked'
import './page-one.html'
window.marked = window.marked || marked

class PageOne extends Polymer.Element {
  static get is () { return 'page-one' }

  static get properties () {
    return {
      lat: {
        type: Number,
        value: 14.3175732
      },
      lng: {
        type: Number,
        value: 120.8635632
      }
    }
  }
}

customElements.define(PageOne.is, PageOne)