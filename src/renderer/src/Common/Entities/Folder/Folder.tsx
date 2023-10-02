import { FileClass } from '../File'
import { HierarchicalElement } from '../Hierarchical'
import { Folder } from './Render'
import { v4 as uuid } from 'uuid'
import { IFolder, folderConstructorType, itemType, itemsType } from './interface'
import { VolumeClass } from '../Volume/Volume'

export class FolderClass extends HierarchicalElement implements IFolder {
  private _id: string = uuid()
  private _items: itemsType = []
  private _name: string | undefined
  private _parent?: FolderClass | VolumeClass = undefined

  constructor({ folderName }: folderConstructorType) {
    super()
    this._name = folderName
  }

  get parent(): FolderClass | VolumeClass {
    return this._parent!
  }

  get id(): string {
    return this._id
  }

  get name(): string | undefined {
    return this._name
  }

  get items(): itemsType {
    return this._items
  }

  getItemById(id: string): itemType {
    return this.items.filter((item) => item.id == id)[0]
  }

  rename(name: string): void {
    this._name = name
  }

  addItem(item: FileClass | FolderClass): void {
    item.setLevel(this.level + 1)
    item.setParent(this)
    HierarchicalElement.setMaxLevel(this.level + 1)
    this._items.push(item)
  }

  setItems(items: itemsType): void {
    this._items = items
  }

  removeItem(id: string): void {
    const newFiles = this.items.filter((item) => item.id == id)
    this.setItems(newFiles)
  }

  setParent(parent: FolderClass | VolumeClass): void {
    this._parent = parent
  }

  render(): JSX.Element {
    return <Folder folderObj={this} />
  }
}
