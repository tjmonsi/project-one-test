import 'polymer/polymer.html'
import 'paper-input/paper-input.html'
import 'paper-button/paper-button.html'
import 'marked-element/marked-element.html'
import marked from 'marked'
import './page-one.html'
window.marked = window.marked || marked

class PageOne extends Polymer.Element {
  static get is () { return 'page-one' }


}

customElements.define(PageOne.is, PageOne)