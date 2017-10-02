import 'polymer/polymer.html'
import 'app-layout/app-header/app-header.html'
import 'app-layout/app-toolbar/app-toolbar.html'
import 'paper-button/paper-button.html'
import './page-header.html'

class PageHeader extends Polymer.Element {
  static get is () { return 'page-header' }

}

customElements.define(PageHeader.is, PageHeader)