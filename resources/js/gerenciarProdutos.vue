<template>
	<div>
		<listarProduto />
	</div>
</template>

<script>
import listarProduto from './components/listar/listarProduto'

export default {

  name: 'gerenciarProdutos',

  components: {
  	listarProduto
  }
}
</script>