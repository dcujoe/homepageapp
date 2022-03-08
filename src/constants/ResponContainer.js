const ResponsiveContainer = ({ children }) => {
    return (
    
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  )

    }

export default ResponsiveContainer;