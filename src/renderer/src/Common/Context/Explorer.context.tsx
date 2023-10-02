import React from 'react'
import { IChildren } from '../Utils/interfaces'
import { Action, VolumeClass } from '../Entities/Volume/Volume'
import { FolderClass } from '../Entities/Folder/Folder'
import { FileClass } from '../Entities/File/File'
import { VscNewFile, VscNewFolder } from 'react-icons/vsc'

interface IExplorer {
  volumes: VolumeClass[]
  setCurrentItem: (item: FileClass | FolderClass) => void
  itemSelected: FileClass | FolderClass | undefined
  addCurrentVolume: (volume: VolumeClass) => void
}

const ExplorerContext = React.createContext<IExplorer>({
  volumes: [],
  setCurrentItem: () => {},
  itemSelected: undefined,
  addCurrentVolume: () => {}
})

const volume = new VolumeClass({ name: 'posts' })
// const file = new FileClass({ filename: 'testeFile', icon: VscAccount })
// const file2 = new FileClass({ filename: 'testeFile2', icon: VscAccount })
// const file3 = new FileClass({ filename: 'testeFile3', icon: VscAccount })
// const folder = new FolderClass({ folderName: 'testFolder' })
// const folder2 = new FolderClass({ folderName: 'testFolder_2' })

// volume.addItem(folder)
// volume.addItem(file)

// folder.addItem(file2)
// folder.addItem(folder2)

// folder2.addItem(file3)

const volume2 = new VolumeClass({ name: 'products' })
const volume3 = new VolumeClass({ name: 'clients' })

const action_1 = new Action({ icon: VscNewFile })
const action_2 = new Action({ icon: VscNewFolder })
volume.setAction(action_1)
volume.setAction(action_2)

export const ExplorerProvider = ({ children }: IChildren): JSX.Element => {
  const [volumes, setVoumes] = React.useState([volume, volume2, volume3])
  const [itemSelected, setItemSelected] = React.useState<FileClass | FolderClass>()
  const [currentVolume, setCurrentVolume] = React.useState<VolumeClass | undefined>(undefined)

  function setCurrentItem(item: FileClass | FolderClass): void {
    setItemSelected(item)
  }

  function addCurrentVolume(volume: VolumeClass): void {
    setCurrentVolume(volume)
  }

  function addFile(): void {
    if (itemSelected instanceof FolderClass) {
      itemSelected.addItem(new FileClass({ filename: 'undefined' }))
    } else if (itemSelected instanceof FileClass) {
      itemSelected.parent.addItem(new FileClass({ filename: 'undefined' }))
    } else {
      currentVolume?.addItem(new FileClass({ filename: 'undefined' }))
    }
    updateVolume()
  }

  function addFolder(): void {
    if (itemSelected instanceof FolderClass) {
      itemSelected.addItem(new FolderClass({ folderName: 'undefined' }))
    } else if (itemSelected instanceof FileClass) {
      itemSelected.parent.addItem(new FolderClass({ folderName: 'undefined' }))
    } else {
      currentVolume?.addItem(new FolderClass({ folderName: 'undefined' }))
    }
    updateVolume()
  }

  function updateVolume(): void {
    setVoumes([volume, volume2, volume3])
  }

  action_1.setAction(addFile)
  action_2.setAction(addFolder)

  return (
    <ExplorerContext.Provider value={{ volumes, setCurrentItem, itemSelected, addCurrentVolume }}>
      {children}
    </ExplorerContext.Provider>
  )
}

export const useExplorer = (): IExplorer => React.useContext(ExplorerContext)
