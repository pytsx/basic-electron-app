import styled from '@emotion/styled'
import theme from '@renderer/Common/Style/theme'

interface ILevel {
  level: number
}
export const FolderWrapper = styled.div<ILevel>`
  height: 100%;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    left: ${({ level }): string => `${level}rem`};
    top: 0rem;
    height: 100%;
    width: 2px;
    background: transparent;
    background: ${theme.palette.text.primary}32;
  }
  &:hover::after {
    background: ${theme.palette.text.primary}80;
  }
`
