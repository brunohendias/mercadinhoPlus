<template>
	<div>
		<form>
			<div class="row">
				<div class="col-lg-6">
					<label for="nomeProduto"><strong>Nome do produto*</strong></label>
					<input type="text" class="form-control" name="nomeProduto" placeholder="Nome do produto" v-model="produto.nome" />
					<div class="row">
						<div class="col-lg-6">
							<label for="valorProduto"><strong>Valor do produto*</strong></label>
							<input type="text" class="form-control" name="valorProduto" placeholder="00,00" v-model="produto.valor" v-mask-decimal.br="2"/>
						</div>
						<div class="col-lg-6">
							<label for="quantidadeProduto"><strong>Quantidade*</strong></label>
							<input type="text" class="form-control" name="quantidadeProduto" id="quantidadeProduto" placeholder="0" v-model="produto.quantidade" v-mask-number/>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<label for="descricaoProduto"><strong>Descrição do produto*</strong></label>
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
				descricao: '',
				quantidade: null
			}
		}
	},
	methods: {
		async cadastrarProduto() {
			if(this.produto.valor) {
				this.produto.valor = this.produto.valor.replace(',', '.')
			}
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