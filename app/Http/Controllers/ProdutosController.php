<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Model\Produtos;

class ProdutosController extends Controller
{

    protected $request;
    protected $produtos;

    public function __construct(Request $request, Produtos $produtos)
    {
        $this->request = $request;
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

    public function buscarPorFiltro()
    {
        $produtosFiltro = $this->produtos->filtro($this->request);

        $produtosFiltro ? $data = $produtosFiltro : $data = $this->index();

        return $data;
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
    public function update($id)
    {
        $data = $this->request->all();

        $produto = $this->edit($id);

        $update = $produto->update($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->produtos->destroy($id);
    }
}