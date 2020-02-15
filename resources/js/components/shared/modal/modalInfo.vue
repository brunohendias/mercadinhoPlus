<template>
	<div class="modal fade" id="modal-info">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header bg-primary text-light">
					<h4 class="modal-title">Informações do produto</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<a data-dismiss="modal" class="text-light">X</a>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-lg-6">
							<img class="imageminfo" :src="produto.link_image" alt="Imagem do produto">
						</div>
						<div class="col-lg-6">
							<h2><strong>Descrição do produto</strong></h2>
							<p>{{ produto.descricao }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiProduto from '../../../core/apiProduto'

export default {
	name: 'modalInfo',
	data() {
		return {
			produto: {}
		}
	},
	props: ['id'],
	watch: {
		id: function(val) {
			this.infoProduto(val)
		}
	},
	methods: {
		async infoProduto(id) {
			await apiProduto.infoProduto(id).then(response => {
				if(response.data != {}) {
					this.produto = response.data			
				} else if (response.data == {}) {
					swal({
						title: 'Produto não encontrado',
						icon: 'warning'
					})
				}
			}).catch(error => {
				swal({
					title: 'Erro na busca',
					icon: 'error'
				})
			})
		}
	}
}
</script>

<style lang="css" scoped>
	.imageminfo {
		height: 350px;
		width: 370px;
	}
</style>