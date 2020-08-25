import { Element } from '../base'

export default class Text extends Element {
  text: string

  constructor(text: string) {
    super('Text')

    this.text = text
  }

  static fromHtml(element: globalThis.Text): Text {
    return new Text(element.textContent ? element.textContent : '')
  }
}
