import React from 'react'
import { VscFolder, VscFolderOpened } from 'react-icons/vsc'
import { Button, Collapse, Typography } from '@mui/material'
import { FolderClass, useExplorer } from '@renderer/Common'
import { IRenderFolder } from './interface'
import { FolderWrapper } from './Styled'

export const Folder = ({ folderObj }: IRenderFolder): JSX.Element => {
  const { setCurrentItem, itemSelected } = useExplorer()
  const [openFolder, setOpenFolder] = React.useState(false)
  function handleOpenFolder(): void {
    setOpenFolder((prev) => !prev)
    setCurrentItem(folderObj)
  }

  return (
    <>
      <Button
        className={itemSelected?.id == folderObj.id ? 'active' : ''}
        sx={{ pl: `${folderObj.level}rem` }}
        onClick={(): void => handleOpenFolder()}
      >
        {openFolder ? <VscFolderOpened /> : <VscFolder />}
        <Typography>{folderObj.name}</Typography>
      </Button>
      <Collapse in={openFolder} sx={{ position: 'relative' }}>
        <FolderWrapper level={folderObj.level}>
          {folderObj.items.map((item) => {
            if (item instanceof FolderClass) {
              return <Folder key={item.id} folderObj={item as FolderClass} />
            } else {
              return <i key={item.id}>{item.render()}</i>
            }
          })}
        </FolderWrapper>
      </Collapse>
    </>
  )
}
