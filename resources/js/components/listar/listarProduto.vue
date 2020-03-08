<template>
	<div class="container">

		<buscaGeral @produtos="produtos = $event"/>

		<div v-if="buscando">
			<half-circle-spinner color="#f00" class="m-auto"/>
		</div>
		<div class="row" v-else>
			<h3 class="title">Editar produtos</h3>
			<table class="table table-dark">
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
					<tr v-for="produto in produtos">
						<th scope="col">
							<img :src="produto.link_image" class="imagem-icon" />
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

			<modalEdit :id="idEdit" @listar="buscarProdutos()" />
			<modalInfo :id="idInfo" />

		</div>
	</div>
</template>

<script>
import apiProduto from '../../core/apiProduto.js'
import modalEdit from '../shared/modal/modalEdit'
import modalInfo from '../shared/modal/modalInfo'
import buscaGeral from '../shared/busca/buscaGeral'
import { HalfCircleSpinner } from 'epic-spinners'

export default {
	name: 'listarProduto',
	components: {
		modalEdit,
		modalInfo,
		buscaGeral,
		HalfCircleSpinner
	},
	data() {
		return {
			produtos: [],
			idEdit: null,
			idInfo: null,
			nome: '',
			buscando: false
		}
	},
	created() {
		this.buscarProdutos()
	},
	methods: {
		async buscarProdutos() {
			this.buscando = true
			await apiProduto.listarProdutos().then(response => {
				this.buscando = false
				this.produtos = response.data
			}).catch(err => {
				this.buscando = false
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
	.imagem-icon {
		height: 120px;
		width: 120px;		
	}
	.title {
		background-color: #343a40;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		width: 100%;
		color: white;
		padding: 10px 0px 10px 25px;
	}
</style>