import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import globalStyles from '@style/globalStyles.ts'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <Global styles={globalStyles} />
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
