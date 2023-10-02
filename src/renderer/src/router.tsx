import { createHashRouter } from 'react-router-dom'
import { Layout, Home, EditorPage } from './Pages'

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:filePath',
        element: <EditorPage />
      }
    ]
  }
])
