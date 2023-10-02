import React from 'react'
import { FileClass } from '../Entities'
interface ITabContext {
  tabs: FileClass[]
  addTab: (tab: FileClass) => void
  closeTab: (id: string, filePath: string, callback: (nextTab: FileClass) => void) => void
  addCurrentTab: (tab: FileClass) => void
  currentTab: FileClass | undefined
}
interface IChildren {
  children: React.ReactNode
}
const TabContext = React.createContext<ITabContext>({
  tabs: [],
  addTab: () => {},
  closeTab: () => {},
  addCurrentTab: () => {},
  currentTab: undefined
})

export const TabProvider = ({ children }: IChildren): JSX.Element => {
  const [tabs, setTabs] = React.useState<FileClass[]>([])
  const [currentTab, setCurrentTab] = React.useState<FileClass>()

  function addTab(tab: FileClass): void {
    const existItem = tabs.find((item) => item.id == tab.id)
    addCurrentTab(tab)
    if (!existItem) {
      setTabs((prev): FileClass[] => {
        const prevFiltrado = prev.filter((i: FileClass) => i?.id !== tab.id)
        return [...prevFiltrado, tab]
      })
    }
  }

  function addCurrentTab(tab: FileClass): void {
    setCurrentTab(tab)
  }

  const [nextTab, setNextTab] = React.useState<FileClass>()

  function getNextTab({ id }: { id: string }): void {
    const currentIndex = tabs.findIndex((obj) => obj.id == id)
    // como podemos executar a função antes de atualizar o _tabgroup, vamos reduzir o elemento eliminado do tamanho total disponível
    const availableLength = tabs.length - 1
    // currentIndex + 1 é usado pois devemos nos referir ao próximo elemento, já que o current ainda vai ser eliminado
    const nextIndex = currentIndex + 1 > availableLength ? currentIndex - 1 : currentIndex + 1
    setNextTab(tabs[nextIndex])
  }
  function closeTab(id: string, filePath: string, callback: (nextTab: FileClass) => void): void {
    getNextTab({ id })
    // filtramos o elemento cujo id é igual ao que desejamos fechar para remover do arr
    const newTabs = tabs.filter((item) => item.id != id)
    // reatribuímos o novo array ao atributo _tabs
    setTabs(newTabs)

    const currentTabWillClose = id == filePath
    const isPathUndefined = filePath == undefined
    const isTabUndefined = getTabById(filePath as string) == undefined

    const goToNextTab = currentTabWillClose || isPathUndefined || isTabUndefined

    // se não tiver próximo index dispinível, permaneça no atual
    if (!goToNextTab) {
      setNextTab(currentTab!)
    }
    callback(nextTab!)
  }

  function getTabById(id: string): FileClass {
    return tabs.filter((item) => item.id == id)[0]
  }

  return (
    <TabContext.Provider value={{ tabs, addTab, closeTab, addCurrentTab, currentTab }}>
      {children}
    </TabContext.Provider>
  )
}
export const useTab = (): ITabContext => React.useContext(TabContext)
