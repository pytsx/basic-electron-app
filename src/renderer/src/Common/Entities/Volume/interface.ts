import { itemsType, itemType } from '../Folder/interface'
import { VolumeClass } from './Volume'

export interface IVolume {
  get name(): string
  get id(): string
  get items(): itemsType
  get index(): number
  setIndex(index: number): void
  rename(name: string): void
  addItem(item: itemType): void
  render(): JSX.Element
}

export interface IRenderVolume {
  volume: VolumeClass
}

export interface IExplorerContainer {
  index: number
}

export interface IExporerAccordion {
  onClick: () => void
  children?: React.ReactNode
  volume: VolumeClass
}

export interface IExplorerHeader {
  expanded: boolean
}
