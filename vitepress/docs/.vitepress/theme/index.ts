//https://vitepress.vuejs.org/guide/theme-introduction#customizing-css
import { ThemeSettings } from '../../src/custom/theme'
import DefaultTheme from 'vitepress/theme'
import '../../src/styles/imports.css'

const CustomTheme = {
    ...DefaultTheme,
    ...ThemeSettings
}

export default CustomTheme