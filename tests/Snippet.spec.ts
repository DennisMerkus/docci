import { Paragraph } from '../src/elements'
import { Snippet } from '../src/documents'

describe('Snippet', () => {
  it('can contain a Paragraph', () => {
    const snippet = new Snippet().addChild(new Paragraph())

    expect(snippet.children).toEqual([new Paragraph()])
  })
})
