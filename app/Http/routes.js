'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('home')

Route.get('/', 'HomeController.index')
Route.get('/press', 'HomeController.press')
Route.get('/faq', 'HomeController.faq')  

Route.group('Participate in FARAD', function() {
  Route.get('/uk', 'ContribController.uk')
  Route.get('/ksa', 'ContribController.ksa')
  Route.get('/jo', 'ContribController.jo')
  Route.get('/gcc', 'ContribController.gcc')
  Route.get('/cn', 'ContribController.cn')
  Route.get('/kr', 'ContribController.kr')
  Route.get('/jp', 'ContribController.jp')
  Route.get('/id', 'ContribController.id')
  Route.get('/th', 'ContribController.th')
  Route.get('/row', 'ContribController.row')
  Route.get('/paypal', 'ContribController.paypal')
}).prefix('/contrib')

Route.group('Language Selection', function() {
  Route.get('/en', 'LangController.en')
  Route.get('/cn', 'LangController.cn')
  Route.get('/kr', 'LangController.kr')
  Route.get('/jp', 'LangController.jp')
  Route.get('/id', 'LangController.id')
  Route.get('/th', 'LangController.th')
  Route.get('/ar', 'LangController.ar')
}).prefix('/lang')




