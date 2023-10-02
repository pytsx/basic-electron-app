import { IconType } from 'react-icons'
import { FileClass } from './File'
import { FolderClass } from '../Folder'
import { VolumeClass } from '../Volume/Volume'

export type tabStatusEnum = 'SAVED' | 'UNSAVED' | 'ERROR' | 'UPDATES'
export type fileConstructor = {
  id?: string
  filename: string
  icon?: IconType
}
export interface IFile {
  get content(): string
  get id(): string
  get icon(): IconType | undefined
  get filename(): string | undefined
  get status(): tabStatusEnum
  get isSelect(): boolean
  get parent(): FolderClass | VolumeClass
  selectTab(): void
  deselectTab(): void
  setContent(value: string): FileClass
  render(): JSX.Element
  __equal__(tab: FileClass): boolean
}

// export interface IFileManager extends IFileGroup {}

export interface IRenderFile {
  file: FileClass
}
