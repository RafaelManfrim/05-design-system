import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  space,
  radii,
  lineHeights,
  fonts,
  fontWeights,
  fontSizes,
} from '@rafaelmanfrim-ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  config,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    space,
    radii,
    lineHeights,
    fonts,
    fontWeights,
    fontSizes,
  },
})
