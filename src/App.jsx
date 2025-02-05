import { useState } from 'react'
import { AppContainer } from './AppStyle'

import { Header, Body, Home } from '../src/components'
import { getTasks } from '../src/utils/api'

function App() {
  const [activeTab, setActiveTab] = useState(0);

  console.log(getTasks())

  return (
    <AppContainer>
      <Header text={"Cozy Tasks"}/>
      <Body>
        {activeTab === 0 && (
          <Home/>
        )}
      </Body>
    </AppContainer>
  )
}

export default App
