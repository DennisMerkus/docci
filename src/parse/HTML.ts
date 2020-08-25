import { Div, Linebreak, Paragraph, Text } from '../elements'
import { Document, Snippet } from '../documents'

import { Element } from '../base'

export function documentFromHtml(element: HTMLElement): Document {
  return new Snippet().addChild(elementFromHtml(element))
}

export function elementFromHtml(element: globalThis.Node): Element {
  if (element instanceof globalThis.Text) {
    return Text.fromHtml(element)
  } else if (element instanceof HTMLDivElement) {
    return new Div().addChildren(extractChildren(element))
  } else if (element instanceof HTMLBRElement) {
    return new Linebreak()
  } else if (element instanceof HTMLParagraphElement) {
    return new Paragraph().addChildren(extractChildren(element))
  } else {
    throw new Error('Not implemented for ' + typeof element)
  }
}

function extractChildren(element: globalThis.Node): Element[] {
  const children: Element[] = []

  for (const child of element.childNodes) {
    children.push(elementFromHtml(child))
  }

  return children
}
