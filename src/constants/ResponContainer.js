import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

const FullContainer = ({ children }) => {
    return (
    
        <MediaContextProvider>
        <BigContainer>{children}</BigContainer>
        <SmallContainer>{children}</SmallContainer>
      </MediaContextProvider>
  )

    }

export default FullContainer;