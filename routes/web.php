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
	Route::get('/', 'CadastrarProdutoController@create')->name('produto');
	Route::post('/store', 'CadastrarProdutoController@store')->name('cadastrarproduto');
});

Route::prefix('produtos')->group(function () {
	Route::get('/', 'ProdutosController@create')->name('produtos');
	Route::get('/listar', 'ProdutosController@index')->name('listarprodutos');
	Route::get('/info/{id}', 'ProdutosController@show')->name('infoproduto');
	Route::get('/editar/{id}', 'ProdutosController@edit')->name('editarproduto');
	Route::put('/update/{id}', 'ProdutosController@update')->name('updateproduto');
	Route::delete('/deletar/{id}', 'ProdutosController@destroy')->name('deletarproduto');
});