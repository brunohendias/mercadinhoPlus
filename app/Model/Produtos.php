<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use DB;

class Produtos extends Model
{
    protected $table = 'produtos';

    protected $primaryKey = 'id';

    protected $fillable = [
    	'nome', 
    	'valor', 
    	'quantidade',
    	'categoria',
    	'link_image',
    	'descricao'
    ];

    public function filtro($request)
    {
        if(isset($request->nome)) {
            return DB::table('produtos')->where('nome', 'LIKE', $request->nome.'%')->get();
        }
        if(isset($request->categoria)) {
            return DB::table('produtos')->where('categoria', 'LIKE', $request->categoria.'%')->get();
        }
        if(isset($request->quantidade)) {
            return DB::table('produtos')->where('quantidade', 'LIKE', $request->quantidade)->get();
        }
    }
}
