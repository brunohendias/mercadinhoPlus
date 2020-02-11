<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $table = 'produto';

    protected $primaryKey = 'id';

    protected $fillable = [
    	'nome', 
    	'valor', 
    	'descricao',
    	'quantidade' 
    ];
}
