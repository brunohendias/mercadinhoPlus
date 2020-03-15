<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Model\Produto;
use \App\Model\Categoria;

class ProdutosController extends Controller
{
    protected $produtos;

    /**
     * Instancia do objeto no construct
     */
    public function __construct(Produto $produtos)
    {
        $this->produtos = $produtos;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->produtos->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $produto = $this->produtos->find($id);

        return $produto;
    }

    /**
     *  Buscar os produtos especificos
     */
    public function buscarPorFiltro(Request $request)
    {
        $nome = $request->nome;
        $categoria = $request->categoria;
        $quantidade = $request->quantidade;

        $produtosFiltro = $this->produtos
            ->when($nome, function($query) use ($nome) {
                return $query->where('nome', 'like', '%'.$nome.'%');
            })
            ->when($categoria, function($query) use ($categoria) {
                return $query->where('categoria', 'like', '%'.$categoria.'%');
            })
            ->when($quantidade, function($query) use ($quantidade) {
                return $query->where('quantidade', $quantidade);
            })->get();

        if(is_null($produtosFiltro)){
            return array('msg' => "Nenhum registro encontrado");
        }

        return $produtosFiltro;
    }

    /*
     * Busca as categorias cadastradas
     */
    public function buscarCategorias(Categoria $categoria) 
    {
        $categorias = $categoria->get();

        return $categorias;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $produto = $this->produtos->find($id);

        return $produto;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $produto = $this->edit($id);

        if(is_null($produto)) {
            return array('msg' => "Registro não encontrado");
        }

        if($request->has('nome') && $request->has('categoria') && 
            $request->has('valor') && $request->has('link_image') && 
            $request->has('quantidade') && $request->has('descricao')) 
        {
            $update = $produto->update($request->all());
        } 
        else {
            return array('msg' => 'Todos os campos são requeridos');
        }

        if(is_null($update)) {
            return array('msg' => "Erro ao alterar o registro");
        }

        return array('msg' => "Registro alterado com sucesso");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = $this->produtos->destroy($id);

        if(is_null($delete)) {
            return array('msg' => "Erro ao deletar");
        }
            
        return array('msg' => "Deletado com sucesso");
    }
}