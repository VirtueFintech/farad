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

  * aboutUs (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('ar/aboutUs')
  }

  * ksa (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('/')
  }

  * jo (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('/')
  }

  * gcc (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('/')
  }

  * remit (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('/')
  }

}

module.exports = ArController
