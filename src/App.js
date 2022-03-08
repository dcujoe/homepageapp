import App from "next/app";
import MediaContextProvider from './constants/createMedia'
import BigContainer from './BigContainer'
import SmallContainer from './SmallContainer'

import '../static/styles.css'



class MyApp extends App {



  
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MediaContextProvider>
      <BigContainer>{children}</BigContainer>
      <SmallContainer>{children}</SmallContainer>
    </MediaContextProvider>
    );
  }
}



export default MyApp;