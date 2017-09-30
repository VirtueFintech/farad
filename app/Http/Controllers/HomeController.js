'use strict'

const Antl = use('Antl')

class HomeController {

  * index (request, response) {
    yield response.sendView('home')
  }

  * press (request, response) {
    yield response.sendView('press')
  }

  * faq (request, response) {
    yield response.sendView('faq')
  }

  * ar (request, response) {
    Antl.setLocale('ar')

    yield response.sendView('ar')
  }

}

module.exports = HomeController
