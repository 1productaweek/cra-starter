import { Color } from 'csstype'

interface TTheme {
  colors: {
    [key: string]: Color
    // primary: Color
    // secondary: Color
    // success: Color
    // info: Color
    // warning: Color
    // danger: Color
    // base0: Color
    // base10: Color
    // base20: Color
    // base30: Color
    // base40: Color
    // base50: Color
    // base60: Color
    // base70: Color
    // base80: Color
    // base90: Color
    // base100: Color
    // base100A80: Color
  }
  baseFont: {
    boxShadow?: string
    lineHeight: number
    color: Color
  }
}
