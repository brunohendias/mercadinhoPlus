<template>
	<div class="row mb-5 p-4 text-light bg-dark borderTop">
		<form class="col-lg-12" method="POST">
			<h4><strong>Pesquise pela informação ou parte dela</strong></h4>
			<div class="row pt-3">
				<div class="col-sm-4">
					<label for="nomefiltro"><strong>Nome do produto</strong></label>
					<input class="form-control" type="text" placeholder="Ex: Cadeira" name="nomefiltro" v-model="filtro.nome" />
				</div>
				<div class="col-sm-4">
					<label for="categoriafiltro"><strong>Categoria</strong></label>
					<Multiselect v-model="filtro.categoria" placeholder="Ex: casa" name="categoriafiltro" :options="categorias"></Multiselect>
				</div>
				<div class="col-sm-4">
					<label for="quantidadefiltro"><strong>Quantidade</strong></label>
					<input class="form-control" type="text" placeholder="Ex: 500" name="quantidadefiltro" v-model="filtro.quantidade" />
				</div>
			</div>
			<button class="btn btn-primary mt-3" @click.prevent="filtroBusca(filtro)">buscar</button>
			<div v-show="msg" class="mt-3 alert alert-danger">{{ msg }}</div>
		</form>
	</div>
</template>

<script>
import apiProduto from '../../../core/apiProduto.js'
import Multiselect from 'vue-multiselect'

export default {
	name: 'buscaGeral',
	components: {
		Multiselect
	},
	data() {
		return {
			filtro: {},
			categorias: [],
			msg: ''
		}
	},
	created() {
		this.buscaCategorias()
	},
	methods: {
		async buscaCategorias () {
			await apiProduto.buscarCategorias().then(response => {
				response.data.map(categoria => {
					this.categorias.push(categoria.categoria)
				})
			})
		},
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
	.form-control {
		height: 44px;
	}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
