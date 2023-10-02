import React from 'react'
import { Button } from '@mui/material'
import { MdClose } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { CloseButton, ITabProps, IconWrapper, TabActions, TabContent } from '.'
import { TabStatus } from './TabStatus'
import { useExplorer, useTab } from '@renderer/Common'

export const TabCustom = ({ tab, closeTab }: ITabProps): JSX.Element => {
  const [mouseEnter, setMouseEnter] = React.useState<boolean>(false)
  const { setCurrentItem } = useExplorer()
  const { addCurrentTab } = useTab()
  const navigate = useNavigate()
  const TabIcon = tab.icon!
  const { filePath } = useParams()

  function onMouseEnter(): void {
    setMouseEnter(true)
  }

  function onMouseLeave(): void {
    setMouseEnter(false)
  }

  function handleClick(): void {
    setCurrentItem(tab)
    navigate(tab.id)
    addCurrentTab(tab)
  }

  function handleCloseTabClick(event: React.MouseEvent<HTMLDivElement>): void {
    // Impede a propagação do evento de clique para o botão principal
    event.stopPropagation()
    closeTab(tab.id)
  }

  return (
    <Button
      id={`${filePath == tab.id ? 'active' : ''}`}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TabContent>
        <IconWrapper>
          <TabIcon />
        </IconWrapper>
        {tab.filename}
      </TabContent>

      <TabActions>
        {mouseEnter ? (
          <CloseButton onClick={handleCloseTabClick}>
            <MdClose />
          </CloseButton>
        ) : (
          <TabStatus status={tab.status!} />
        )}
      </TabActions>
    </Button>
  )
}
