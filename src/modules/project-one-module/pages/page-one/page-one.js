import 'polymer/polymer.html'
import 'paper-input/paper-input.html'
import 'paper-button/paper-button.html'
import './page-one.html'

class PageOne extends Polymer.Element {
  static get is () { return 'page-one' }


}

customElements.define(PageOne.is, PageOne)