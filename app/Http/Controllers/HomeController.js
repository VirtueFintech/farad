'use strict'

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

}

module.exports = HomeController
