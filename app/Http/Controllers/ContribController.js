'use strict'

const Antl = use('Antl')

class ContribController {

  * uk (request, response) {
    yield response.sendView('/')
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

  * cn (request, response) {
    yield response.sendView('/')
  }

  * kr (request, response) {
    yield response.sendView('/')
  }

  * jp (request, response) {
    yield response.sendView('/')
  }

  * id (request, response) {
    yield response.sendView('/')
  }

  * th (request, response) {
    yield response.sendView('/')
  }

  * row (request, response) {
    yield response.sendView('/')
  }

  * remit (request, response) {
    yield response.sendView('/')
  }

}

module.exports = ContribController
