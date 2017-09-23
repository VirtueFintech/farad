'use strict'

const Antl = use('Antl')

class ContribController {

  * uk (request, response) {
    yield response.sendView('contrib/uk')
  }

  * ksa (request, response) {
    yield response.sendView('contrib/ksa')
  }

  * jo (request, response) {
    yield response.sendView('contrib/jo')
  }

  * gcc (request, response) {
    yield response.sendView('contrib/gcc')
  }

  * cn (request, response) {
    yield response.sendView('contrib/cn')
  }

  * kr (request, response) {
    Antl.setLocale('kr')    
    yield response.sendView('contrib/kr')
  }

  * jp (request, response) {
    yield response.sendView('contrib/jp')
  }

  * row (request, response) {
    yield response.sendView('contrib/row')
  }

}

module.exports = ContribController
