'use strict'

const Antl = use('Antl')

class HomeController {

  * index (request, response) {

//    if (Antl.getLocale!='cn') {Antl.setLocale('en')}
    Antl.getLocale()
    // console.log(Antl.getLocale())
    yield response.sendView('home')

  }

  * press (request, response) {
   //    console.log(Antl.getLocale())
      Antl.getLocale()
    yield response.sendView('press')
  }

  * faq (request, response) {
       Antl.getLocale()
   //    console.log(Antl.getLocale())
    yield response.sendView('faq')
  }

  * ar (request, response) {
    Antl.setLocale('ar')

    yield response.sendView('ar')
  }

}

module.exports = HomeController
