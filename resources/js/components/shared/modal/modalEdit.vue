<template>
	<div class="modal fade" id="modal-edit">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content">
				<div class="modal-header bg-dark text-light">
					<h4 class="modal-title">Editar produto</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<font color="#fff" aria-hidden="true">X</font>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-lg-4">
							<img v-if="produto.link_image" :src="produto.link_image" class="imagemproduto" />
							<p v-else class="text-center"><strong>Digite o link no campo Link da imagem</strong></p>
						</div>
						<div class="col-lg-4">
							<label class="h5" for="nomeProduto"><strong>Nome do produto<font color="#f00">*</font></strong></label>
							<input type="text" class="form-control" name="nomeProduto" placeholder="Nome do produto" v-model="produto.nome" max="50" maxlength="50" />
							<div class="row mt-2">
								<div class="col-lg-6 mt-2">
									<label class="h5" for="valorProduto"><strong>Valor do produto<font color="#f00">*</font></strong></label>
									<input type="text" class="form-control" name="valorProduto" placeholder="00,00" v-model="produto.valor" max="12" maxlength="12"/>
								</div>
								<div class="col-lg-6 mt-2">
									<label class="h5" for="quantidadeProduto"><strong>Quantidade<font color="#f00">*</font></strong></label>
									<input type="text" class="form-control" name="quantidadeProduto" id="quantidadeProduto" placeholder="0" v-model="produto.quantidade" v-mask-number max="10" maxlength="10" onkeypress="return event.keyCode >= 48 && event.keyCode <= 57 "/>
								</div>
								<div class="col-lg-6 mt-2">
									<label class="h5" for="categoria"><strong>Categoria<font color="#f00">*</font></strong></label>
									<input type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" v-model="produto.categoria" maxlength="25" max="25">
								</div>
							</div>
							<div class="row mt-2">
								<div class="col-sm-12">
									<label class="h5" for="linkImage"><strong>Link da imagem<font color="#f00">*</font></strong></label>
									<input type="text" class="form-control" name="linkImage" id="linkImage" placeholder="Link" v-model="produto.link_image" maxlength="255" max="255">
								</div>
							</div>
						</div>
						<div class="col-lg-4 mt-2">
							<label class="h5" for="descricaoProduto"><strong>Descrição do produto<font color="#f00">*</font></strong></label>
							<textarea name="descricaoProduto" class="form-control" id="descricaoProduto" cols="30" rows="10" v-model="produto.descricao"></textarea>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateProduto()">Salvar alterações</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiProduto from '../../../core/apiProduto'

export default {
	name: 'modalEdit',
	data() {
		return {
			produto: {}
		}
	},
	props: ['id'],
	watch: {
		id: function(val) {
			this.editarProduto(val)
		}
	},
	methods: {
		async editarProduto(id) {
			await apiProduto.editarProduto(id).then(response => {
				if(response.data != {}) {
					this.produto = response.data
					this.nome = response.data.nome
				} else if(response.data == {}) {
					swal({
						title: 'Produto não encontrado',
						icon: 'error'
					})
				}
			}).catch(error => {
				swal({
					title: 'Erro na busca',
					icon: 'error'
				})
			})
		},
		updateProduto() {
			let id = this.produto.id
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
					this.produto.valor = this.produto.valor.replace(/\./g, '').replace(',', '.')
					console.log(this.produto.valor)
					await apiProduto.updateProduto(id, this.produto).then(response => {
						msg = nome+' alterado com suscesso!'
						swal({
							title: msg,
							icon: 'success'
						})
						this.$emit('listar')
					}).catch(err => {
						msg = 'Erro ao alterar o produto '+nome
						swal({
							title: msg,
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
</style>