import { FileClass } from '../File'
import { VolumeClass } from '../Volume/Volume'
import { FolderClass } from './Folder'

export type itemType = FolderClass | FileClass
export type itemsType = itemType[]

export type folderConstructorType = {
  folderName: string
}

export interface IFolder {
  get items(): itemsType
  get name(): string | undefined
  get id(): string
  get parent(): FolderClass | VolumeClass
  getItemById(id: string): itemType
  removeItem(id: string): void
  setItems(items: itemsType): void
  addItem(item: itemType): void
  rename(name: string): void
  render(): JSX.Element
}

export interface IRenderFolder {
  folderObj: FolderClass
}
