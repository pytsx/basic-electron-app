import { Button, Stack, ThemeProvider, Tooltip, Typography, AppBar } from '@mui/material'
import { appbarTheme } from './styled'
import { MdHouse } from 'react-icons/md'
import theme from '@renderer/Common/Style/theme'

export const Appbar = (): JSX.Element => {
  return (
    <ThemeProvider theme={{ ...theme, ...appbarTheme }}>
      <AppBar>
        <MainActions />
      </AppBar>
    </ThemeProvider>
  )
}

const MainActions = (): JSX.Element => {
  return (
    <Stack>
      <Tooltip sx={{ zIndex: 30000! }} title={'undefined'}>
        <Button size="small">
          <Typography variant="h5" lineHeight={0}>
            <MdHouse />
          </Typography>
        </Button>
      </Tooltip>
    </Stack>
  )
}
