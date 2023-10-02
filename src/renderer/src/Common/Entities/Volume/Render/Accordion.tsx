import React from 'react'
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'
import { Typography, Collapse, Stack } from '@mui/material'
import { IExporerAccordion } from '../interface'
import {
  HeaderFolderWrapper,
  Icon,
  VolumeAccordionContainer,
  VolumeHeader,
  VolumeToolbar
} from './styled'

export const VolumeAccordion = ({ children, onClick, volume }: IExporerAccordion): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hover, setHover] = React.useState<boolean>(false)

  function handleClick(): void {
    onClick!()
    setIsOpen((prev) => !prev)
  }

  return (
    <VolumeAccordionContainer
      index={volume.index}
      onMouseEnter={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
    >
      <VolumeHeader expanded={isOpen}>
        <HeaderFolderWrapper onClick={(): void => handleClick()}>
          <Icon>{isOpen ? <VscChevronDown /> : <VscChevronRight />}</Icon>
          <Typography sx={{ margin: '0 .16rem', textTransform: 'uppercase', fontStyle: 'normal' }}>
            {volume.name}
          </Typography>
        </HeaderFolderWrapper>
        {hover ? (
          <VolumeToolbar>
            {volume.actions.map((action) => {
              const ActionIcon = action.icon!
              return (
                <Icon key={action.id} onClick={(): void => action.onClick()}>
                  <ActionIcon />
                </Icon>
              )
            })}
          </VolumeToolbar>
        ) : (
          ''
        )}
      </VolumeHeader>
      <Collapse in={isOpen}>
        <Stack sx={{ height: isOpen ? '100%' : 'fit-content', marginTop: '.16rem' }}>
          {children}
        </Stack>
      </Collapse>
    </VolumeAccordionContainer>
  )
}

//  <VscNewFile />

//             <Icon>
//               <VscNewFolder />
//             </Icon>
//             <Icon>
//               <VscRefresh />
//             </Icon>
//             <Icon>
//               <VscCollapseAll />
//             </Icon>
