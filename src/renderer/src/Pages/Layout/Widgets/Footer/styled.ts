import styled from '@emotion/styled'
import { IFooterStyled } from './Interface'
import { createTheme, lighten } from '@mui/material'
import { theme } from '@renderer/Common'
export const footerTheme = createTheme({
  ...theme,
  palette: {
    text: {
      primary: lighten(theme.palette.text.primary, 1)
    }
  },
  typography: {
    allVariants: {
      fontSize: `11px`,
      fontWeight: 100,
      color: '#ffffff',
      lineHeight: `11px`
    }
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          gap: '.2rem'
        }
      }
    },
    MuiTooltip: {
      defaultProps: {
        followCursor: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'transparent',
          borderRadius: 0,
          padding: '.08rem .16rem',
          minWidth: 'fit-content',
          textTransform: 'capitalize',
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'end',
          gap: '.08rem',
          '&:hover': {
            background: '#fafafa20'
          },
          '&:active': {
            background: '#fafafa32'
          }
        }
      },
      defaultProps: {
        size: 'small',
        disableRipple: true
      }
    }
  }
})

export const FooterContainer = styled.div<IFooterStyled>`
  background: ${({ background }): string => background};
  width: 100%;
  height: 1.1rem;
  display: flex;
  padding: 0rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
`
