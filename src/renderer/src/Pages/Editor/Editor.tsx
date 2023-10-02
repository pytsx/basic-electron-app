import React from 'react'
import { theme } from '@renderer/Common'

interface IEditor {
  value: string
  onChange: (value:  React.ChangeEvent<HTMLTextAreaElement>) => void
}

const editorStyle = {
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: theme.palette.text.primary
}

export const Editor = ({ value, onChange }: IEditor): JSX.Element => {


  return <textarea value={value} onChange={onChange} style={{ ...editorStyle, resize: 'none', }} />
}
