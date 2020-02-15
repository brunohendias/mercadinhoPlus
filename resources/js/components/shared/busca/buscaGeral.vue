<template>
	<div class="row borderForm mb-5 py-4 bg-dark text-light">
		<form class="col-lg-12" method="POST">
			<h4><strong>Busca por filtro</strong></h4>
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
			<button class="btn btn-primary mt-3" @click.prevent="buscaFiltro(filtro)">buscar</button>
		</form>
	</div>
</template>

<script>
import apiProduto from '../../../core/apiProduto.js'

export default {
	name: 'buscaGeral',
	data() {
		return {
			filtro: {}
		}
	},
	methods: {
		async buscaFiltro(filtro) {
			await apiProduto.buscaFiltrada(filtro).then(response => {
				if(response.data.length == 0) {
					swal({
						title: 'Nenhum produto encontrado',
						icon: 'error'
					})
				} else if(response.data.length > 0) {
					let produtos = response.data
					this.$emit('produtos', produtos)
				}
			}).catch(err => {
				swal({
					title: 'Ocorreu algum erro na busca',
					icon: 'error'
				})
			})
		}
	}
}
</script>

<style>
	.borderForm {
		border: 1px solid #ddd;
	}
</style>