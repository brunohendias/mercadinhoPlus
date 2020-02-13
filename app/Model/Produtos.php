<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

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
}
