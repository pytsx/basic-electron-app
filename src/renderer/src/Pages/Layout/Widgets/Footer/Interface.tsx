import { IconType } from 'react-icons'
import { ITheme } from '@renderer/Common'

export interface IFooterStyled extends ITheme {
  background: string
}
export type actionButtonType = {
  id: string
  icon?: IconType
  label?: string
  placeholder?: string
  action?: () => void
}
export interface IFooterBtns {
  [key: string | number]: actionButtonType[]
}
