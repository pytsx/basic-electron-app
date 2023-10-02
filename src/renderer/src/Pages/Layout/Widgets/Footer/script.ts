import { IFooterBtns } from './Interface'
import { v4 as uuid } from 'uuid'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { HierarchicalElement } from '@renderer/Common'
import { VscTypeHierarchySub } from 'react-icons/vsc'

export const footerButtonsScript: IFooterBtns = {
  primary_actions: [
    {
      id: uuid(),
      label: String(HierarchicalElement.maxLevel),
      placeholder: 'Hierarchical max level',
      icon: VscTypeHierarchySub,
      action: () => console.log('hello wol')
    }
  ],
  secondary_actions: [{ id: uuid(), label: undefined, icon: MdOutlineNotificationsActive }]
}
