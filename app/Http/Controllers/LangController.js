'use strict'

const Antl = use('Antl')
var MyUrl='/'

class LangController {

  * en (request, response) {
   Antl.setLocale('en');
 
   response.redirect('/en')  }

  * cn (request, response) {
   Antl.setLocale('cn');
   response.redirect('/cn')
  }

  * kr (request, response) {
   Antl.setLocale('kr')

    response.redirect('/kr')
  }

  * jp (request, response) {
    Antl.setLocale('jp')
  
    response.redirect('/jp')
  }
  
  * id (request, response) {
    Antl.setLocale('id')
    response.redirect('/id')
  }
  
  * th (request, response) {
    Antl.setLocale('th')
    response.redirect('/th')
  }
  
  * ar (request, response) {
    response.redirect('/ar')
  }

}

module.exports = LangController
