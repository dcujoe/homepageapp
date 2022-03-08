import MediaContextProvider from './constants/createMedia'
import BigContainer from './components/BigContainer'
import SmallContainer from './components/SmallContainer'
import './index.css'



class MyApp extends App {



  
  render() {
    
    return (
      <MediaContextProvider>
      <BigContainer>{children}</BigContainer>
      <SmallContainer>{children}</SmallContainer>
    </MediaContextProvider>
    );
  }
}



export default MyApp;