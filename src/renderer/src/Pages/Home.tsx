import { Stack } from '@mui/material'
import { Logo } from '@renderer/assets/Logo'

function Home(): JSX.Element {
  return (
    <Stack sx={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Logo />
    </Stack>
  )
}

export default Home
