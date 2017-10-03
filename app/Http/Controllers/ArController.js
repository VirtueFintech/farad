'use strict'

const Antl = use('Antl')

// set the default locale.
Antl.setLocale('ar')

class ArController {

  * home (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/home')
  }

  * faq (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/faq')
  }

  * press (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/press')
  }

  * ksa (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/ksa')
  }

  * jo (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/jo')
  }

  * gcc (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/gcc')
  }

  * paypal (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/paypal')
  }

}

module.exports = ArController
