import { Suspense } from 'react'
import routes from '~react-pages'

const App = () => {
  return (
    <Suspense>
      {useRoutes(routes)}
    </Suspense>
  )
}

export default App
