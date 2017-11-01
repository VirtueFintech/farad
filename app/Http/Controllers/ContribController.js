'use strict'

const Antl = use('Antl')

class ContribController {

  * uk (request, response) {
    yield response.sendView('home')
  }

  * ksa (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('home')
  }

  * jo (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('home')
  }

  * gcc (request, response) {
    Antl.setLocale('ar')
    yield response.sendView('home')
  }

  * cn (request, response) {
    yield response.sendView('home')
  }

  * kr (request, response) {
    yield response.sendView('home')
  }

  * jp (request, response) {
    yield response.sendView('home')
  }

  * id (request, response) {
    yield response.sendView('home')
  }

  * th (request, response) {
    yield response.sendView('home')
  }

  * row (request, response) {
    yield response.sendView('home')
  }

  * remit (request, response) {
    yield response.sendView('home')
  }

}

module.exports = ContribController
