import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  typography: {
    allVariants: {
      fontWeight: 'lighter',
      fontFamily: 'Montserrat',
      fontSize: '13px'
    }
  },
  palette: {
    background: {
      default: '#252525',
      paper: '#1d1d1d'
    },
    text: {
      primary: '#9d9d9d',
      secondary: '#c9c9c9'
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '2rem',
          height: '2rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: 0
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
