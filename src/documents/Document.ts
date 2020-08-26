import { Parent } from '../base'
import { Token } from '../tokens'

export interface DocumentData {
  id: string
  type: string

  wordCount: number
  children: (DocumentData | TextDocumentData)[]

  lexemeIds: string[]
  wordIds: string[]
}

export interface TextDocumentData extends DocumentData {
  type: 'Text'

  tokens: Token[]
}

export default class Document extends Parent {
  constructor(data: DocumentData) {
    super(data.type)

    this.children.push(...data.children.map((child) => new Document(child)))
  }
}
