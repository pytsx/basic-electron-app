import styled from '@emotion/styled'
import { lighten } from '@mui/system'
import { Typography, createTheme } from '@mui/material'
import { theme } from '@renderer/Common'
import { ITabGroupElement } from '.'

const defaultBackground = theme.palette.background.default
const btnBackgroundActive = theme.palette.background.paper
const btnColor = theme.palette.text.primary
const fontSize = '.8rem'
export const tabGroupTheme = createTheme({
  typography: {
    allVariants: {
      fontSize,
      color: btnColor,
      fontWeight: 100
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          maxWidth: '8rem',
          minWidth: '6rem',
          textTransform: 'none',
          padding: '0rem .2rem',
          lineHeight: '0',
          borderRadius: 0,
          display: 'flex',
          justifyContent: 'space-between',
          background: theme.palette.background.default,
          color: btnColor,
          borderRight: `1px solid ${theme.palette.background.paper}`,
          fontSize,
          '&:hover': {
            background: theme.palette.background.default
          }
        }
      },
      defaultProps: {
        size: 'small',
        disableRipple: true
      },
      variants: [
        {
          props: { id: 'active' },
          style: {
            background: btnBackgroundActive,
            '&:hover': {
              background: btnBackgroundActive
            }
          }
        },
        {
          props: { className: 'UNSAVED' },
          style: { color: 'yellow' }
        },
        {
          props: { className: 'ERROR' },
          style: { color: 'red' }
        },
        {
          props: { className: 'DELETED' },
          style: {
            textDecoration: 'line-through',
            opacity: 0.7,
            '&:hover': { textDecoration: 'line-through', opacity: 0.7 }
          }
        },
        {
          props: { className: 'SALVED' },
          style: { color: theme.palette.text.primary }
        }
      ]
    },
    MuiStack: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          alignItems: 'center'
        }
      }
    }
  }
})

export const CloseButton = styled.div`
  color: ${btnColor};
  font-size: 0.8rem;
  height: fit-content;
  border-radius: 0.2rem;
  padding: 0.08rem;
  zindex: 1000;
  right: 0;
  &:hover {
    background: ${lighten(defaultBackground, 0.08)};
  }
`
export const Container = styled.div<ITabGroupElement>`
  width: 100%;
  height: ${({ height = '2rem' }): string => height};
  // position: fixed;
  background: ${theme.palette.background.default};
  top: 0;
  display: ${({ display = 'flex' }): string => display};
  z-index: 1000;
`

export const IconWrapper = styled.span`
  padding-right: 0.32rem;
  padding-left: 0.32rem;
  font-size: 0.7rem;
`

export const TabTitle = styled(Typography)``

export const TabContent = styled.div`
  margin-left: 0.48rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TabActions = styled.div`
  margin-left: 0.48rem;
  position: relative;
  align-items: center;
  width: 1.4rem;
  justify-content: center;
  display: flex;
`
