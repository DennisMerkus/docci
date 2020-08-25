export interface Token {
  id: string
  type: string
}

export interface WordToken extends Token {}

export interface SpaceToken extends Token {
  required: boolean
}

export interface NumberToken extends Token {
  number: number
  text: string
}

export interface BlockToken extends Token {
  text: string
}

export interface PunctuationToken extends Token {
  text: string
}
