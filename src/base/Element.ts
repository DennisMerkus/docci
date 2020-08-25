export default class Element {
  type: string

  classes = new Set<string>()

  constructor(type: string) {
    this.type = type
  }

  addClass(newClass: string) {
    this.classes.add(newClass)
  }
}
