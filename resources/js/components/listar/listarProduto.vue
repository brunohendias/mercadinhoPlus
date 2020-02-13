<template>
	<div class="col-lg-12">
		<h3>Editar produtos</h3>
		<table v-if="this.produtos.length > 0" class="table table-striped">
			<thead class="thead-dark">
				<tr>
					<th scope="col">Imagem</th>
					<th scope="col">Nome</th>
					<th scope="col">Valor</th>
					<th scope="col">Quantidade</th>
					<th scope="col">Categoria</th>
					<th scope="col">Descrição</th>
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
					<th scope="col">R$ {{produto.valor}}</th>
					<th scope="col">{{produto.quantidade}}</th>
					<th scope="col">{{produto.categoria}}</th>
					<th scope="col">{{produto.descricao}}</th>
					<th scope="col">
						<a class="btn border-primary" @click="infoProduto(produto)">
							<img src="https://img.icons8.com/material-rounded/24/000000/information.png">
						</a>
					</th>
					<th scope="col">
						<a class="btn border-dark" @click="recuperarProduto(produto)" data-target="#modal" data-toggle="modal">
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
		<div class="modal fade" id="modal">
			<div class="modal-dialog modal-xl" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Editar produto</h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">X</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-lg-4">
								<img :src="novoProduto.link_image" class="imagemproduto" />
							</div>
							<div class="col-lg-4">
								<label for="nomeProduto"><strong>Nome do produto*</strong></label>
								<input type="text" class="form-control" name="nomeProduto" placeholder="Nome do produto" v-model="novoProduto.nome" />
								<div class="row mt-2">
									<div class="col-lg-6 mt-2">
										<label for="valorProduto"><strong>Valor do produto*</strong></label>
										<input type="text" class="form-control" name="valorProduto" placeholder="00,00" v-model="novoProduto.valor"/>
									</div>
									<div class="col-lg-6 mt-2">
										<label for="quantidadeProduto"><strong>Quantidade*</strong></label>
										<input type="text" class="form-control" name="quantidadeProduto" id="quantidadeProduto" placeholder="0" v-model="novoProduto.quantidade" v-mask-number/>
									</div>
									<div class="col-lg-6 mt-2">
										<label for="categoria"><strong>Categoria*</strong></label>
										<input type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" v-model="novoProduto.categoria">
									</div>
								</div>
								<div class="row mt-2">
									<div class="col-sm-12">
										<label for="linkImage"><strong>Link da imagem*</strong></label>
										<input type="text" class="form-control" name="linkImage" id="linkImage" placeholder="Link" v-model="novoProduto.link_image">
									</div>
								</div>
							</div>
							<div class="col-lg-4 mt-2">
								<label for="descricaoProduto"><strong>Descrição do produto*</strong></label>
								<textarea name="descricaoProduto" class="form-control" id="descricaoProduto" cols="30" rows="10" v-model="novoProduto.descricao"></textarea>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal" @click="editarProduto()">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiProduto from '../../core/apiProduto'

export default {
	name: 'listarProduto',
	data() {
		return {
			produtos: [],
			novoProduto: {},
			nome: '',
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
		recuperarProduto(produto) {
			this.novoProduto.id = produto.id
			this.novoProduto.nome = produto.nome
			this.novoProduto.valor = produto.valor
			this.novoProduto.quantidade = produto.quantidade
			this.novoProduto.categoria = produto.categoria
			this.novoProduto.link_image = produto.link_image
			this.novoProduto.descricao = produto.descricao
			this.nome = produto.nome
		},
		editarProduto() {
			let id = this.novoProduto.id
			let nome = this.nome
			let msg = 'Realmente quer editar o produto: '+nome+' ?'
			swal({
				title: msg,
				icon: 'warning',
				buttons: [
					'não',
					'sim'
				]
			}).then(async willChange => {
				if(willChange) {
					let produto = this.novoProduto
					let data = {
						'nome': produto.nome,
						'valor': produto.valor.replace(',', '.'),
						'quantidade': produto.quantidade,
						'categoria': produto.categoria,
						'link_image': produto.link_image,
						'descricao': produto.descricao
					}
					await apiProduto.editarProduto(id, data).then(response => {
						msg = nome+' alterado com suscesso!'
						swal({
							title: msg,
							icon: 'success'
						})
						this.buscarProdutos()						
					}).catch(err => {
						msg = 'Erro ao alterar o produto '+nome
						swal({
							title: msg,
							icon: 'error'
						})
					})
				}
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

<style lang="css" scoped>
	.imagemproduto {
		height: 320px;
		width: 350px;
	}
	.imagemicon {
		height: 120px;
		width: 120px;		
	}
</style>