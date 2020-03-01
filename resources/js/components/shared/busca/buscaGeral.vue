<template>
	<div class="row mb-5 p-4 text-light bg-dark borderTop">
		<form class="col-lg-12" method="POST">
			<h4><strong>Pesquise pela informação ou parte dela</strong></h4>
			<div class="row pt-3">
				<div class="col-sm-4">
					<label for="nomefiltro"><strong>Nome do produto</strong></label>
					<input class="form-control" type="text" name="nomefiltro" v-model="filtro.nome" />
				</div>
				<div class="col-sm-4">
					<label for="categoriafiltro"><strong>Categoria</strong></label>
					<input class="form-control" type="text" name="categoriafiltro" v-model="filtro.categoria" />
				</div>
				<div class="col-sm-4">
					<label for="quantidadefiltro"><strong>Quantidade</strong></label>
					<input class="form-control" type="text" name="quantidadefiltro" v-model="filtro.quantidade" />
				</div>
			</div>
			<button class="btn btn-primary mt-3" @click.prevent="filtroBusca(filtro)">buscar</button>
			<div v-show="msg" class="mt-3 alert alert-danger">{{ msg }}</div>
		</form>
	</div>
</template>

<script>
import apiProduto from '../../../core/apiProduto.js'

export default {
	name: 'buscaGeral',
	data() {
		return {
			filtro: {},
			msg: ''
		}
	},
	methods: {
		async filtroBusca(filtro) {
			await apiProduto.buscaFiltrada(filtro).then(response => {
				let produtos = response.data
				if(produtos.length == 0) {
					this.msg = "Nenhum produto encontrado"
				} else if(produtos.length > 0) {
					this.msg = ""
				}
				this.$emit('produtos', produtos)
			}).catch(err => {
				this.msg = 'Ocorreu algum erro na busca'
			})
			this.filtro = {}
		}
	}
}
</script>

<style>
	.borderTop {
		border-bottom: 5px solid #777;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
</style>