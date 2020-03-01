<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Model\Produtos;

class CadastrarProdutoController extends Controller
{
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
