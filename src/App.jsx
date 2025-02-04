import { useState } from 'react'
import { AppContainer } from './AppStyle'

import { Header, Body } from '../src/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <Header text={"Cozy Tasks <3"}/>
      <Body/>
    </AppContainer>
  )
}

export default App
