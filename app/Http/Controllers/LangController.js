'use strict'

const Antl = use('Antl')

class LangController {

  * en (request, response) {
    Antl.setLocale('en')
    yield response.redirect('/')
  }

  * cn (request, response) {
    Antl.setLocale('cn')
    yield response.redirect('/')
  }

  * kr (request, response) {
    Antl.setLocale('kr')
    yield response.redirect('/')
  }

  * jp (request, response) {
    Antl.setLocale('jp')
    yield response.redirect('/')
  }
  
  * ar (request, response) {
    Antl.setLocale('ar')
    yield response.redirect('/')
  }

}

module.exports = LangController
