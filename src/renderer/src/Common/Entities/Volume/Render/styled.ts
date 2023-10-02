import styled from '@emotion/styled'
import { IExplorerContainer, IExplorerHeader } from '../interface'
import { Paper, Stack, Typography } from '@mui/material'
import { theme } from '@renderer/Common'

export const VolumeHeader = styled.div<IExplorerHeader>`
  display: flex;
  padding: 0.32rem 0;
  height: 100%;
  align-items: center;
  box-shadow: ${({ expanded }): string => (expanded ? '0px 2px 3px -1px #101010' : '')};
`
export const VolumeAccordionContainer = styled(Paper)<IExplorerContainer>`
  borderradius: 0;
  width: 100%;
  border-top: ${({ index }): string =>
    index < 1 ? 'none' : `1px solid ${theme.palette.text.primary}32`};
`

export const VolumeToolbar = styled(Stack)`
  width: fit-content;
  align-items: center;
  justify-content: end;
  max-height: 1rem;
  padding-right: 0.64rem;
  flex-direction: row;
  gap: 0.24rem;
`

export const HeaderFolderWrapper = styled(Stack)`
  width: 100%;
  flex-direction: row;
`

export const Icon = styled(Typography)`
  font-size: 0.8rem;
  font-weight: bold;
`
