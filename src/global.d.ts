// import { CSSProp } from "styled-components";
// import { SerializedStyles, CSSObject, InterpolationWithTheme } from '@emotion/core'

type CSSItem = CSSObject | SerializedStyles
type CSSList = CSSItem[] | CSSItem

// declare module "styled-components" {
//   export interface DefaultTheme {
//     // Your theme stuff here
//   }
// }

declare module 'react' {
  // @Igor we need to fix this - remove any
  interface Attributes {
    css?: any
  }
  interface HTMLAttributes<T> {
    css?: any
  }
  interface IntrinsicAttributes {
    css?: any
  }
}

declare global {
  namespace JSX {
    interface HTMLAttributes<T> {
      css?: any
    }
  }
}

export {}

declare global {
  interface Window {
    analytics: any
    Beacon: any
    drift: any
    jsonlint: any
    Intercom: any
    __fs_org: string
  }
  interface HTMLIFrameElement {
    webkitallowfullscreen?: any
    mozallowfullscreen?: any
  }
}

declare global {
  namespace firebase {
    interface User {
      profile: IUserData
      loaded: boolean
      update: (update: IUserData) => Promise<void>
    }
  }
}
