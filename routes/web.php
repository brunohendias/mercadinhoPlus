<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('cadastroproduto')->group(function() {
	Route::get('/', 'CadastrarProdutoController@create')->name('cadastrarproduto');
	Route::post('/store', 'CadastrarProdutoController@store')->name('dadosproduto');
});

Route::prefix('produtos')->group(function () {
	Route::name('produto')->group(function () {
		Route::get('/', 'ProdutosController@create');
		Route::get('/listar', 'ProdutosController@index')->name('.listar');
		Route::get('/info/{id}', 'ProdutosController@show')->name('.info');
		Route::get('/editar/{id}', 'ProdutosController@edit')->name('.editar');
		Route::post('/fill', 'ProdutosController@buscarPorFiltro')->name('.filtro');
		Route::put('/update/{id}', 'ProdutosController@update')->name('.update');
		Route::delete('/deletar/{id}', 'ProdutosController@destroy')->name('.deletar');
	});
});