import { Element } from '../base'
import { Token } from '../tokens'

export default class Tokens extends Element {
  tokens: Token[]

  constructor(tokens: Token[]) {
    super('Tokens')

    this.tokens = tokens
  }
}
