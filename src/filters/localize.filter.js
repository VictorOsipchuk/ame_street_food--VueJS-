import store from '../store'
import ua from '../locales/ua.json'
import en from '../locales/en.json'
import ru from '../locales/ru.json'

const locales = {
  en,
  ua,
  ru,
}

export default function localizeFilter(key) {
  const locale = store.getters.locale
  return locales[locale][key]
}
