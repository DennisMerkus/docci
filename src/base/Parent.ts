import Element from './Element'

export default class Parent extends Element {
  children: Element[]

  constructor(type: string, children: Element[] = []) {
    super(type)

    this.children = children
  }

  addChild(child: Element): this {
    this.children.push(child)

    return this
  }

  addChildren(children: Element[]): this {
    this.children.push(...children)

    return this
  }
}
