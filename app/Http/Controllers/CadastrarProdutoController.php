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

        $existe = $produtos->where('nome', $request->nome)->count();

        if($existe == 0) {
            $insert = $produtos->create($data);

            if($insert) {
                return array('msg' => 'Produto cadastrado com suscesso');
            } else {
                return array('msg' => 'Erro ao cadastrar o produto');
            } 
        } else if($existe >= 1) {
            return array('msg' => 'Produto ja cadastrado');
        }
    }
}
