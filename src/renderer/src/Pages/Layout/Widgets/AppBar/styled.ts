import { Fade, createTheme } from '@mui/material'
import { theme } from '@renderer/Common'
export const appbarTheme = createTheme({
  palette: {
    primary: {
      main: '#cc6600'
    }
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        TransitionComponent: Fade,
        placement: 'right',
        followCursor: true,
        arrow: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '.4rem .32rem',
          height: '2rem',
          minWidth: '100%',
          color: '#c9c9c9af',
          cursor: 'default',
          '&:hover': {
            color: '#ffffffef',
            background: 'none'
          }
        }
      },
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '100%',
          width: '2rem',
          position: 'sticky',
          top: 0,
          boxShadow: 'none',
          background: theme.palette.background.paper,
          padding: '0rem',
          display: 'flex',
          alignItems: 'center'
        }
      }
    }
  }
})
