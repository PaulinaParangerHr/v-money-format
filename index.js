import MoneyFormat from './component'
import VMoneyFormat from './directive'
import options from './options'

export {
  MoneyFormat,
  VMoneyFormat,
  options
}

function install (Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function(key){
      options[key] = globalOptions[key]
    })
  }
  Vue.directive('money-format', VMoneyFormat)
  Vue.component('money-format', MoneyFormat)
}

export default install

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
