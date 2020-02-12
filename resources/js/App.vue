<template>
	<div>
    <div class="container">
      <div class="row col-lg-8 m-auto">
        <Cadastroproduto />		
      </div>
    </div>
	</div>
</template>

<script>
import Cadastroproduto from './components/cadastro/cadastrarProduto'

export default {

  name: 'App',

  components: {
    Cadastroproduto
  }
}
</script>