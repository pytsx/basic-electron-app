import { ThemeProvider, Typography } from '@mui/material'
import { theme, useExplorer } from '@renderer/Common'
import { Container, explorerTheme } from '.'

export const Explorer = (): JSX.Element => {
  const { volumes } = useExplorer()

  return (
    <ThemeProvider theme={{ ...theme, ...explorerTheme }}>
      <Container>
        <Typography sx={{ padding: '.4rem 1rem', fontWeight: 100, textTransform: 'uppercase' }}>
          Explorer
        </Typography>
        {volumes.map((volume, index) => {
          volume.setIndex(index)
          return <i key={volume.id}>{volume.render()}</i>
        })}
      </Container>
    </ThemeProvider>
  )
}
