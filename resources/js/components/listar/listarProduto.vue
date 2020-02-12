<template>
	<div class="col-lg-12">
		<h3>Produtos</h3>
		<table v-if="this.produtos.length > 0" class="table table-striped">
			<thead class="thead-dark">
				<tr>
					<th scope="col">Nome</th>
					<th scope="col">Valor</th>
					<th scope="col">Descrição</th>
					<th scope="col">Quantidade</th>
					<th scope="col">Info</th>
					<th scope="col">Editar</th>
					<th scope="col">Excluir</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(produto, i) in produtos" :key="i">
					<th scope="col">{{produto.nome}}</th>
					<th scope="col">{{produto.valor}}</th>
					<th scope="col">{{produto.descricao}}</th>
					<th scope="col">{{produto.quantidade}}</th>
					<th scope="col">
						<a class="btn border-primary" @click="infoProduto(produto)">
							<img src="https://img.icons8.com/material-rounded/24/000000/information.png">
						</a>
					</th>
					<th scope="col">
						<a class="btn border-dark" @click="editarProduto(produto)">
							<img src="https://img.icons8.com/carbon-copy/24/000000/multi-edit.png">
						</a>
					</th>
					<th scope="col">
						<a class="btn border-danger" @click="deletarProduto(produto.id)">
							<img src="https://img.icons8.com/ios-glyphs/24/000000/trash--v1.png">
						</a>
					</th>
				</tr>
			</tbody>
		</table>
		<p v-else>{{ msg }}</p>
	</div>
</template>

<script>
import apiProduto from '../../core/apiProduto'

export default {
	name: 'listarProduto',
	data() {
		return {
			produtos: [],
			msg: ''
		}
	},
	created() {
		this.buscarProdutos()
	},
	methods: {
		async buscarProdutos() {
			await apiProduto.listarProdutos().then(response => {
				this.produtos = response.data
				if(this.produtos.length == 0) {
					this.msg = "Nenhum Produto Encontrado"
				}
			}).catch(err => {
				this.msg = "Ocorreu algum erro na busca"
			})
		},
		infoProduto(produto) {
			swal({
				title: "Em construção",
				icon: "warning"
			})
		},
		editarProduto(produto) {
			swal({
				title: "Em construção",
				icon: "warning"
			})
		},
		deletarProduto(id) {
			swal({
				title: "Deseja deletar esse produto",
				icon: 'warning',
				buttons: [
					'não',
					'sim'
				]
			}).then(async willDelete => {
				if(willDelete) {
					await apiProduto.deletarProduto(id).then(response => {
						swal({
							title: "Produto deletado com suscesso",
							icon: "success"
						})
						this.buscarProdutos()
					}).catch(err => {
						swal({
							title: "Erro ao deletar o produto",
							icon: 'error'
						})
					})
				}
			})
		}
	}
}
</script>