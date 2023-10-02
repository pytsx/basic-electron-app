import { v4 as uuid } from 'uuid'
import { itemType, itemsType } from '../Folder/interface'
import { IVolume } from './interface'
import { HierarchicalElement } from '../Hierarchical'
import { RenderVolume } from './Render/Render'
import { IconType } from 'react-icons'
import { VscArchive } from 'react-icons/vsc'
// interface IAction {
//   id?: string
//   action: () => void
//   icon: IconType
//   placeholder: string
// }
export class Action {
  private _id: string = uuid()
  private _onClick: () => void = () => {}
  private _icon: IconType
  private _placeholder: string = ''

  constructor({ icon = VscArchive }: { icon?: IconType }) {
    this._icon = icon
  }

  setAction(action: () => void): void {
    this._onClick = action
  }

  get id(): string {
    return this._id
  }

  get icon(): IconType {
    return this._icon
  }

  get onClick(): () => void {
    return this._onClick
  }

  get placeholder(): string {
    return this._placeholder
  }
}

export class VolumeActions extends HierarchicalElement {
  private _actions: Action[] = []

  constructor() {
    super()
  }

  get actions(): Action[] {
    return this._actions
  }

  setAction(action: Action): void {
    this._actions.push(action)
  }
}

export class VolumeClass extends VolumeActions implements IVolume {
  private _name: string
  private _id: string = uuid()
  private _items: itemsType = []
  private _index: number = 0

  constructor({ name }: { name: string }) {
    super()
    this._name = name
  }

  get items(): itemsType {
    return this._items
  }

  get name(): string {
    return this._name
  }

  get id(): string {
    return this._id
  }

  get index(): number {
    return this._index
  }

  rename(name: string): void {
    this._name = name
  }

  addItem(item: itemType): void {
    item.setLevel(this.level + 1)
    item.setParent(this)
    this._items.push(item)
  }

  setIndex(index: number): void {
    this._index = index
  }

  render(): JSX.Element {
    return <RenderVolume volume={this} />
  }
}
