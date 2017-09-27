'use strict'

const Antl = use('Antl')

class LangController {

  * en (request, response) {
    Antl.setLocale('en')
    response.redirect('back')
  }

  * cn (request, response) {
    Antl.setLocale('cn')
    response.redirect('back')
  }

  * kr (request, response) {
    Antl.setLocale('kr')
    response.redirect('back')
  }

  * jp (request, response) {
    Antl.setLocale('jp')
    response.redirect('back')
  }
  
  * id (request, response) {
    Antl.setLocale('id')
    response.redirect('back')
  }
  
  * ar (request, response) {
    Antl.setLocale('ar')
    response.redirect('back')
  }

}

module.exports = LangController
