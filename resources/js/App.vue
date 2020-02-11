<template>
	<div>
		<h1>Ola filha da puta</h1>
		{{ produtos }}
		{{ msg }}
	</div>
</template>

<script>
export default {

  name: 'App',

  data() {
  	return {
  		produtos: [],
  		msg: ''
  	}
  },

  created() {
  	this.buscarProdutos();
  },

  methods: {
  	async buscarProdutos() {
  		await axios.get('/cadastroproduto').then(response => {
  			this.produtos = response.data
  			this.msg = "ok"
  		}).catch(err => {
  			this.msg = "erro na busca"
  		})
  	}
  }

}
</script>