import { FileClass } from '@renderer/Common'

export interface ITabGroupElement {
  height?: string
  display?: string
}
export interface ITabProps {
  className?: string
  tab: FileClass
  closeTab: (id: string) => void
}

export type nextTab = FileClass | undefined
