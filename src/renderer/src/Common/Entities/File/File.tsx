import { IconType } from 'react-icons'
import { v4 as uuid } from 'uuid'
import { IFile, tabStatusEnum, fileConstructor } from './interface'
import { HierarchicalElement } from '../Hierarchical'
import { RenderFile } from './Render'
import { VscFile } from 'react-icons/vsc'
import { FolderClass } from '../Folder'
import { VolumeClass } from '../Volume/Volume'

export class FileClass extends HierarchicalElement implements IFile {
  // atributos da implementação
  private _id: string = uuid()
  private _filename?: string
  private _icon?: IconType = VscFile
  private _status: tabStatusEnum = 'SAVED'
  private _isSelected: boolean = false
  private _parent?: FolderClass | VolumeClass = undefined

  // novos atributos
  private _content: string = ''

  constructor({ filename }: fileConstructor) {
    super()
    this._filename = filename
  }

  get parent(): FolderClass | VolumeClass {
    return this._parent!
  }

  get content(): string {
    return this._content
  }

  get id(): string {
    return this._id
  }

  get icon(): IconType | undefined {
    return this._icon
  }

  get filename(): string | undefined {
    return this._filename
  }

  get status(): tabStatusEnum {
    return this._status
  }

  get isSelect(): boolean {
    return this._isSelected
  }

  rename(name: string): void {
    this._filename = name
  }

  setParent(parent: FolderClass | VolumeClass): void {
    this._parent = parent
  }

  selectTab(): void {
    this._isSelected = true
  }

  deselectTab(): void {
    this._isSelected = false
  }

  setContent(value: string): FileClass {
    this._content = value
    return this
  }

  render(): JSX.Element {
    return <RenderFile file={this} />
  }

  __equal__(tab: FileClass): boolean {
    return this.id == tab.id
  }
}
