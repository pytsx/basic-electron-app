import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme, useTab } from '@renderer/Common'
import { nextTab, Container, tabGroupTheme } from '.'
import { TabCustom } from './Tab'

export const TabGroup = (): JSX.Element => {
  const { tabs, closeTab, currentTab } = useTab()
  const navigate = useNavigate()
  const { filePath } = useParams()
  const [nextTab, setNextTab] = React.useState<nextTab>(undefined)

  // função responsável por implementar o fechamento de uma tab
  function handleCloseTab(id: string): void {
    closeTab(id, filePath!, (nextTab) => {
      setNextTab(nextTab)
    })
  }

  // hook responsável por atualizar a rota da página a cada atualização da lista de tabs
  React.useEffect(() => {
    if (tabs.length == 0) {
      navigate('/')
    } else if (nextTab) {
      navigate(nextTab.id)
      setNextTab(undefined)
    }
  }, [tabs, currentTab])

  return (
    <ThemeProvider theme={{ ...theme, ...tabGroupTheme }}>
      <Container display={tabs.length == 0 ? 'none' : 'flex'}>
        {tabs!.map((tab) => (
          <TabCustom closeTab={handleCloseTab} key={tab.id as string} tab={tab} />
        ))}
      </Container>
    </ThemeProvider>
  )
}
