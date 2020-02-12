<template>
	<div class="container">
		<div class="row">
			<listarProduto />
		</div>
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