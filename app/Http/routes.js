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
//Route.redirect('/farad-ucc', '/ucc',301)  

Route.get('/', 'HomeController.index')
Route.get('/press', 'HomeController.press')
Route.get('/faq', 'HomeController.faq')  

// Language specific page.
// Route.get('/ar', 'HomeController.ar')  

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

Route.group('Arabic Pages', function() {
  Route.get('/', 'ArController.home')
  Route.get('/faq', 'ArController.faq')
  Route.get('/press', 'ArController.press')
  Route.get('/ksa', 'ArController.ksa')
  Route.get('/jo', 'ArController.jo')
  Route.get('/gcc', 'ArController.gcc')
  Route.get('/paypal', 'ArController.paypal')
}).prefix('/ar')

Route.group('Language Selection', function() {
  Route.get('/en', 'LangController.en')
  Route.get('/cn', 'LangController.cn')
  Route.get('/kr', 'LangController.kr')
  Route.get('/jp', 'LangController.jp')
  Route.get('/id', 'LangController.id')
  Route.get('/th', 'LangController.th')
  Route.get('/ar', 'LangController.ar')
}).prefix('/lang')


Route.group('Language Pages', function() {
  Route.get('/en', 'LangPageController.en')
  Route.get('/cn', 'LangPageController.cn')
  Route.get('/kr', 'LangPageController.kr')
  Route.get('/jp', 'LangPageController.jp')
  Route.get('/id', 'LangPageController.id')
  Route.get('/th', 'LangPageController.th')
})


