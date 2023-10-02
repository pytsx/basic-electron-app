import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'
import { Appbar, Footer, Explorer } from './Widgets'
import { Container, ContentBox, OutletContainer } from './styled'
import React from 'react'
import { rootVarManager } from '@renderer/Common'
import { TabGroup } from './Widgets/TabGroup/TabGroup'

export const Layout = (): JSX.Element => {
  const { toogleRootVar } = rootVarManager()
  const [isMouseEnter, setIsMouseEnter] = React.useState(false)
  React.useEffect(() => {
    // função responsável por alterar uma var css entre dois valores caso uma condição se cumpra
    toogleRootVar({
      variable: '--scroll-color',
      inCase: isMouseEnter,
      valueCaseTrue: '#afafaf40',
      valueCaseFalse: 'transparent'
    })
  }, [isMouseEnter])

  return (
    <Container>
      <Stack sx={{ width: '100%', height: '100%' }} direction="row">
        <Appbar />
        <Explorer />
        <OutletContainer>
          <TabGroup />
          <ContentBox
            onMouseEnter={(): void => setIsMouseEnter(true)}
            onMouseLeave={(): void => setIsMouseEnter(false)}
          >
            <Outlet />
          </ContentBox>
        </OutletContainer>
      </Stack>
      <Footer />
    </Container>
  )
}
