import { Button, Collapse, OutlinedInput, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useExplorer, useTab } from '@renderer/Common'
import { IRenderFile } from './interface'
import { VscEdit, VscSend } from 'react-icons/vsc'
import React from 'react'

export const RenderFile = ({ file }: IRenderFile): JSX.Element => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = React.useState(false)
  const { filePath } = useParams()
  const { addTab } = useTab()
  const { setCurrentItem, itemSelected } = useExplorer()
  const [openRenameFile, setOpenRenameFile] = React.useState(false)
  const Icon = file.icon!
  const [newName, setNewName] = React.useState<string>(file.filename!)

  function handleOpenFile(): void {
    if (openRenameFile && itemSelected?.id != file.id) {
      rename()
    }
    navigate(file.id)
    addTab(file)
    setCurrentItem(file)
  }

  function rename(): void {
    file.rename(newName)
    setOpenRenameFile(false)
  }

  function handleInputValue(e: string): void {
    setNewName(e)
  }

  function onClose(): void {
    setOpenMenu(false)
  }

  function openRename(): void {
    if (itemSelected?.id == file.id) {
      setOpenRenameFile(true)
    }
  }

  return (
    <Button
      onContextMenu={(): void => setOpenMenu((prev) => !prev)}
      onMouseLeave={onClose}
      className={itemSelected?.id == file.id && filePath == file.id ? 'active' : ''}
      sx={{ pl: `${file.level}rem`, position: 'relative' }}
      onClick={(): void => handleOpenFile()}
    >
      <Icon />
      {openRenameFile && itemSelected?.id == file.id ? (
        <OutlinedInput
          onChange={(e): void => handleInputValue(e.target.value)}
          value={newName}
          endAdornment={<VscSend style={{ cursor: 'pointer' }} onClick={rename} />}
        />
      ) : (
        <Typography>{file.filename}</Typography>
      )}

      <Collapse in={openMenu && !openRenameFile}>
        <ContextMenu onClick={openRename} />
      </Collapse>
    </Button>
  )
}

const ContextMenu = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <Stack
      onClick={onClick}
      sx={{
        position: 'absolute',
        width: 'fit-content',
        height: '100%',
        right: '.64rem',
        zIndex: 2000,
        top: '0px',
        justifyContent: 'center'
      }}
    >
      <VscEdit />
    </Stack>
  )
}
