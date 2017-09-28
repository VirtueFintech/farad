'use strict'

const Antl = use('Antl')

class LangController {

  * en (request, response) {
    const lang = 'en'
    Antl.setLocale(lang)

    response.redirect('/')
  }

  * cn (request, response) {
    const lang = 'cn'
    Antl.setLocale(lang)

    response.redirect('/')
  }

  * kr (request, response) {
    const lang = 'kr'
    Antl.setLocale(lang)

    response.redirect('/')
  }

  * jp (request, response) {
    const lang = 'jp'
    Antl.setLocale(lang)

    response.redirect('/')
  }
  
  * id (request, response) {
    const lang = 'id'
    Antl.setLocale(lang)

    response.redirect('/')
  }
  
  * ar (request, response) {
    const lang = 'ar'
    Antl.setLocale(lang)

    response.redirect('/')
  }

}

module.exports = LangController
