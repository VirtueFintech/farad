'use strict'

// const Antl = use('Antl')

class HomeController {

	* index (request, response) {
		yield response.sendView('home')
	}

}

module.exports = HomeController
