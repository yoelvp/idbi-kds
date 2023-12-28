import type { FC } from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/ui/index'
import { store } from '@/app/store'
import { theme } from '@/ui'
import Routing from '@/router/Routing'

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
