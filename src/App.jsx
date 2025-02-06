import { useState, useEffect } from 'react'
import { AppContainer } from './AppStyle'

import { Header, Body, Home, Login, Loading, Settings } from '../src/components'
import { checkAuthorization } from '../src/utils/api'

function App() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  // Check Login Status
  useEffect(() => {
    checkAuthorization()
      .then((response) => {
        if (response) {
          setClient(response)
          setActiveTab(1);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  // Handle Changes in Login Status
  useEffect(() => {
    if (client)
    {
      setActiveTab(1);
    }
    else {
      setActiveTab(0);
    }
  }, [client])

  // Draw App
  return (!loading) ? (
    <AppContainer>
      <Header text={"Cozy Tasks"} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Body>
        {activeTab === 0 && (
          <Login setClient={setClient}/>
        )}

        {activeTab === 1 && (
          <Home client={client}/>
        )}

        {activeTab === 2 && (
          <Settings/>
        )}
      </Body>
    </AppContainer>
  ) : (
    <AppContainer>
      <Header text={"Cozy Tasks"}/>
      <Body>
        <Loading/>
      </Body>
    </AppContainer>
  );
}

export default App
