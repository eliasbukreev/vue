import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import type { DefaultConfigOptions } from '@formkit/vue'
import { ru } from '@formkit/i18n'

  
const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  config: { rootClasses },
  locales: {ru},
  locale: 'ru'
}

export default config
