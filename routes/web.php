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

Route::prefix('cadastroproduto')->group(function () {
	Route::get('/', 'ProdutoController@index')->name('produto');
	Route::post('/store', 'ProdutoController@store')->name('cadastrarproduto');
});

Route::prefix('produtos')->group(function () {
	Route::get('/', 'ProdutoController@indexprodutos')->name('indexprodutos');
	Route::get('/listar', 'ProdutoController@listarProdutos')->name('listarprodutos');
	Route::delete('/deletar/{id}', 'ProdutoController@destroy')->name('deletarproduto');
});