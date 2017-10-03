'use strict'

const Antl = use('Antl')
var MyUrl='/'

class LangController {

  * en (request, response) {
    Antl.setLocale('en')
    response.redirect('/')
  }

  * cn (request, response) {
    Antl.setLocale('cn')
  //  response.redirect('/')
  response.redirect('/')
  }

  * kr (request, response) {
    Antl.setLocale('kr')
    response.redirect('/')
  }

  * jp (request, response) {
    Antl.setLocale('jp')
    response.redirect('/')
  }
  
  * id (request, response) {
    Antl.setLocale('id')
    response.redirect('/')
  }
  
  * th (request, response) {
    Antl.setLocale('th')
    response.redirect('/')
  }
  
  * ar (request, response) {
    response.redirect('/ar')
  }

}

module.exports = LangController
