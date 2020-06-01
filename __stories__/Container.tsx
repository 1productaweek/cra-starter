import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as themes from '#/themes'
import mineralTheme from '#/themes/mineral'
import globalStyles from '#/globalStyles'

interface ContainerProps {
  children?: React.ReactNode
  theme?: string
}

export default function Container ({ children, theme = 'light' }: ContainerProps) {
  const themeObj = (themes as any)[theme]
  return (
    <ThemeProvider theme={themeObj}>
      <ThemeProvider theme={mineralTheme(themeObj)}>
        {children}
        <Global styles={globalStyles(themeObj)} />
      </ThemeProvider>
    </ThemeProvider>
  )
}
