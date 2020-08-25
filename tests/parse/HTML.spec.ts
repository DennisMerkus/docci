import { Div, Linebreak, Paragraph, Text } from '../../src/elements'

import { elementFromHtml } from '../../src/parse/HTML'

describe('HTML Parsing', () => {
  it('can load <div>', () => {
    const div = document.createElement('div')

    expect(elementFromHtml(div)).toEqual(new Div())
  })

  it('can load <p> with text content', () => {
    const text = 'Hello, World'

    const p = document.createElement('p')
    p.textContent = text

    expect(elementFromHtml(p)).toEqual(new Paragraph().addChild(new Text(text)))
  })

  it('can load <p> with nested elements', () => {
    const p = document.createElement('p')
    p.appendChild(document.createTextNode('Hello,'))
    p.appendChild(document.createElement('br'))
    p.appendChild(document.createTextNode('World!'))

    expect(elementFromHtml(p)).toEqual(
      new Paragraph().addChildren([
        new Text('Hello,'),
        new Linebreak(),
        new Text('World!'),
      ])
    )
  })
})
