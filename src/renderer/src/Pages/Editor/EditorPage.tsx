import { useParams } from 'react-router-dom'
import { Editor } from './Editor'
import { useEffect, useState } from 'react'
import { useTab } from '@renderer/Common'

export const EditorPage = (): JSX.Element => {
  const { filePath } = useParams()
  const { currentTab } = useTab()
  // Crie um estado para armazenar os valores Delta de cada página
  const [pageValues, setPageValues] = useState<{ [key: string]: string }>({})

  // Função para lidar com a alteração de conteúdo do editor
  function onChange(value: React.ChangeEvent<HTMLTextAreaElement>): void {
    // Atualize o estado com o novo valor Delta para esta página
    setPageValues((prevValues) => ({
      ...prevValues,
      [filePath!]: value.target.value
    }))
    // fileManager.getById(filePath!).setContent(value.target.value)
  }
  useEffect(() => {
    // Verifique se já existe um valor Delta no estado para esta página
    if (!pageValues[filePath!]) {
      // Se não existir, inicialize com um valor Delta vazio
      setPageValues((prevValues) => ({
        ...prevValues,
        [filePath!]: ''
      }))
    }
  }, [filePath])
  if (currentTab) {
    return <Editor value={currentTab!.content as string} onChange={onChange} />
  } else {
    return <>not found</>
  }
}
