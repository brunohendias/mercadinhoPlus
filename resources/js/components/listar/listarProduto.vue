<template>
	<div class="mx-4">
		<h3>Editar produtos</h3>
		<table v-if="this.produtos.length > 0" class="table table-dark">
			<thead> 
				<tr>
					<th scope="col">Imagem</th>
					<th scope="col">Nome</th>
					<th scope="col">Valor</th>
					<th scope="col">Quantidade</th>
					<th scope="col">Categoria</th>
					<th scope="col">Info</th>
					<th scope="col">Editar</th>
					<th scope="col">Excluir</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(produto, i) in produtos" :key="i">
					<th scope="col">
						<img :src="produto.link_image" class="imagemicon" />
					</th>
					<th scope="col">{{produto.nome}}</th>
					<th scope="col">R$ {{produto.valor | currency}}</th>
					<th scope="col">{{produto.quantidade}}</th>
					<th scope="col">{{produto.categoria}}</th>
					<th scope="col">
						<a class="btn btn-primary" @click="pegaId(produto.id, 'info')" data-target="#modal-info" data-toggle="modal">
							<img src="https://img.icons8.com/material-rounded/20/000000/information.png">
						</a>
					</th>
					<th scope="col">
						<a class="btn btn-warning" @click="pegaId(produto.id, 'edit')" data-target="#modal-edit" data-toggle="modal">
							<img src="https://img.icons8.com/material-outlined/20/000000/edit.png">
						</a>
					</th>
					<th scope="col">
						<a class="btn btn-danger" @click="deletarProduto(produto.id)">
							<img src="https://img.icons8.com/ios-glyphs/20/000000/trash--v1.png">
						</a>
					</th>
				</tr>
			</tbody>
		</table>
		<p v-else>{{ msg }}</p>
		<modalEdit :id="idEdit" @listar="buscarProdutos()" />
		<modalInfo :id="idInfo" />
	</div>
</template>

<script>
import apiProduto from '../../core/apiProduto.js'
import modalEdit from '../shared/modal/modalEdit'
import modalInfo from '../shared/modal/modalInfo'

export default {
	name: 'listarProduto',
	data() {
		return {
			produtos: [],
			idEdit: null,
			idInfo: null,
			nome: '',
			msg: ''
		}
	},
	components: {
		modalEdit,
		modalInfo
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
		},
		pegaId(id, component) {
			if(component == 'edit') {
				this.idEdit = id
			} else if(component == 'info'){
				this.idInfo = id
			}
		}
	}
}
</script>

<style lang="css" scoped>
	.imagemicon {
		height: 120px;
		width: 120px;		
	}
</style>