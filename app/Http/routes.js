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

Route.get('/contrib/uk', 'ContribController.uk')
Route.get('/contrib/ksa', 'ContribController.ksa')
Route.get('/contrib/jo', 'ContribController.jo')
Route.get('/contrib/gcc', 'ContribController.gcc')

Route.get('/contrib/cn', 'ContribController.cn')
Route.get('/contrib/kr', 'ContribController.kr')
Route.get('/contrib/jp', 'ContribController.jp')
Route.get('/contrib/row', 'ContribController.row')

