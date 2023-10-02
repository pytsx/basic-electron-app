import styled from '@emotion/styled'
import { Box, createTheme, lighten } from '@mui/material'
import { theme } from '@renderer/Common'

export const explorerTheme = createTheme({
  ...theme,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent'
        }
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: '.8rem',
          fontWeight: 400,
          fontSize: '.64rem'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          alignItems: 'start',
          justifyContent: 'start'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          textTransform: 'none',
          alignItems: 'center',
          justifyContent: 'start',
          color: theme.palette.text.primary,
          padding: '0rem .64rem',
          fontSize: '.8rem',
          height: '1.5rem',
          background: theme.palette.background.default,
          gap: '.32rem',
          '&:hover': {
            background: `${lighten(theme.palette.background.paper, 0.1)}`
          }
        }
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
        disableTouchRipple: true
      },
      variants: [
        {
          props: { className: 'active' },
          style: {
            background: `${lighten(theme.palette.background.paper, 0.24)}`,
            '&:hover': {
              background: `${lighten(theme.palette.background.paper, 0.24)}`
            }
          }
        }
      ]
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          minWidth: '10px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          minWidth: '10px',
          height: '100%',
          fontSize: '.8rem'
        }
      }
    }
  }
})

export const Container = styled(Box)`
  padding: 0rem;
  margin-bottom: 1rem;
  min-width: 8rem;
  position: relative;
`
