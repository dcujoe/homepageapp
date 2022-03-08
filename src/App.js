import React from 'react';
import { createMedia } from '@artsy/fresnel'
import BigContainer from './components/BigContainer'
import SmallContainer from './components/SmallContainer'
import './index.css'



function App() {

  const { children } = this.props
      const { fixed } = this.state

  const { MediaContextProvider } = createMedia({
    breakpoints: {
      sm: 0,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  })

  
  
    
    return (
      <MediaContextProvider>
      <BigContainer>{children}</BigContainer>
      <SmallContainer>{children}</SmallContainer>
    </MediaContextProvider>
    );
  }




export default App;