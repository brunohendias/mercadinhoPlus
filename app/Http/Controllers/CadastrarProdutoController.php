<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Model\Produto;

class CadastrarProdutoController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Produto $produtos)
    {
        $data = $request->all();

        $insert = $produtos->create($data);
    }
}
