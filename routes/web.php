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
    return view('layouts.app');
});
Route::prefix('/api')->group(function () {
	Route::prefix('/v1')->group(function () {
		Route::get('/cadastroproduto', function () {
		    return view('layouts.app');
		});
		Route::prefix('/produtos')->group(function () {
			Route::name('produto')->group(function () {
				Route::get('/', function () { 
					return view('layouts.app'); 
				});
				Route::post('store', 'CadastrarProdutoController@store')->name('.cadastro');
				Route::get('listar', 'ProdutosController@index')->name('.listar');
				Route::get('info/{id}', 'ProdutosController@show')->name('.info');
				Route::get('editar/{id}', 'ProdutosController@edit')->name('.editar');
				Route::post('fill', 'ProdutosController@buscarPorFiltro')->name('.filtro');
				Route::get('categorias', 'ProdutosController@buscarCategorias')->name('.categorias');
				Route::put('update/{id}', 'ProdutosController@update')->name('.update');
				Route::delete('deletar/{id}', 'ProdutosController@destroy')->name('.deletar');
			});
		});
	});
});