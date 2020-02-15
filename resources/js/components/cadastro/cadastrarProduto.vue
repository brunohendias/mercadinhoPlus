<template>
	<div>
		<form>
			<div class="row">
				<div class="col-lg-4">
					<img v-if="produto.link_image" :src="produto.link_image" class="imagemproduto borderImage" />
					<p v-else class="text-center"><strong>Digite o link no campo Link da imagem</strong></p>
				</div>
				<div class="col-lg-4">
					<label for="nomeProduto"><strong>Nome do produto<font color="#f00">*</font></strong></label>
					<input type="text" class="form-control" name="nomeProduto" placeholder="Nome do produto" max="50" maxlength="50" v-model="produto.nome" />
					<div class="row">
						<div class="col-lg-6">
							<label for="valorProduto"><strong>Valor do produto<font color="#f00">*</font></strong></label>
							<input type="text" class="form-control" name="valorProduto" placeholder="00,00" v-model="produto.valor" v-mask-decimal.br="2" max="12" maxlength="12" />
						</div>
						<div class="col-lg-6">
							<label for="quantidadeProduto"><strong>Quantidade<font color="#f00">*</font></strong></label>
							<input type="text" class="form-control" name="quantidadeProduto" id="quantidadeProduto" placeholder="0" v-model="produto.quantidade" v-mask-number max="10" maxlength="10" onkeypress="return event.keyCode >= 48 && event.keyCode <= 57 "/>
						</div>
						<div class="col-lg-6">
							<label for="categoria"><strong>Categoria<font color="#f00">*</font></strong></label>
							<input type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" v-model="produto.categoria" maxlength="25" max="25">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<label for="linkImage"><strong>Link da imagem<font color="#f00">*</font></strong></label>
							<input type="text" class="form-control" name="linkImage" id="linkImage" placeholder="Link" v-model="produto.link_image" maxlength="255" max="255">
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<label for="descricaoProduto"><strong>Descrição do produto<font color="#f00">*</font></strong></label>
					<textarea name="descricaoProduto" class="form-control" id="descricaoProduto" cols="30" rows="10" v-model="produto.descricao"></textarea>
				</div>
			</div>
			<input type="button" class="btn btn-primary float-right mt-3" @click="cadastrarProduto()" value="Cadastrar" />
		</form>
	</div>
</template>

<script>
import apiProduto from '../../core/apiProduto'

export default {

	name: 'cadastrarProduto',

	data () {
		return {
			produto: {
				nome: '',
				valor: null,
				quantidade: null,
				categoria: '',
				link_image: '',
				descricao: ''
			}
		}
	},
	methods: {
		async cadastrarProduto() {
			this.produto.valor = this.produto.valor.replace(/\./g, '').replace(',', '.')
			await apiProduto.cadastrarProduto(this.produto).then(response => {
				swal({
					title: 'Produto cadastrado com suscesso!',
					icon: 'success'
				})
			}).catch(err => {
				let msg = 'Erro ao cadastrar o produto'
				if(!this.produto.nome || !this.produto.valor || !this.produto.descricao || !this.produto.quantidade) {
					msg = "Todos os campos são obrigatorio"
				}
				swal({
					title: msg,
					icon: 'error'
				})
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
	.borderImage {
		border: 1px solid #ddd;
	}
</style>