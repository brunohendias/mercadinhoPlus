<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Model\Produtos;

class CadastrarProdutoController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('cadastrar.cadastrarProduto');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Produtos $produtos)
    {
        $data = $request->all();

        $insert = $produtos->create($data);
    }
}
