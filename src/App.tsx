import type { FC } from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from '@/ui/index'
import { store } from '@/app/store'
import Routing from '@/router/Routing'
import { ThemeProvider } from 'styled-components'

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <ThemeProvider theme={{ bg: 'red', fg: 'blue' }}>
          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
