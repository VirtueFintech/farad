'use strict'

const Antl = use('Antl')
var MyUrl='/'

class LangController {

  * en (request, response) {
    Antl.setLocale('en')
//    localStorage.setItem('en', FRLang);
    response.redirect('/')
  }

  * cn (request, response) {
    Antl.setLocale('cn');
 //   localStorage.setItem('cn', FRLang);
  response.redirect('/')
  }

  * kr (request, response) {
    Antl.setLocale('kr')
  //  localStorage.setItem('id', FRLang);

    response.redirect('/')
  }

  * jp (request, response) {
    Antl.setLocale('jp')
 //   localStorage.setItem('jp', FRLang);

    response.redirect('/')
  }
  
  * id (request, response) {
    Antl.setLocale('id')
 //   localStorage.setItem('id', FRLang);
    response.redirect('/')
  }
  
  * th (request, response) {
    Antl.setLocale('th')
  //  localStorage.setItem('th', FRLang);
    response.redirect('/')
  }
  
  * ar (request, response) {
 //   localStorage.setItem('ar', FRLang);
    response.redirect('/ar')
  }

}

module.exports = LangController
