export default {
	cadastrarProduto(body) {
		let url = '/cadastroproduto/store'
		return axios.post(url, body)
	},
	listarProdutos() {
		let url = '/produtos/listar'
		return axios.get(url)
	},
	infoProduto(id) {
		let url = '/produtos/info/'+id
		return axios.get(url)
	},
	editarProduto(id) {
		let url = '/produtos/editar/'+id
		return axios.get(url)
	},
	updateProduto(id, body) {
		let url = '/produtos/update/'+id
		return axios.put(url, body)
	},
	deletarProduto(id) {
		let url = '/produtos/deletar/'+id
		return axios.delete(url)
	}
}