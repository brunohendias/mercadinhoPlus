export default {
	cadastrarProduto(body) {
		let url = '/cadastroproduto/store'
		return axios.post(url, body)
	},
	listarProdutos() {
		let url = '/produtos/listar'
		return axios.get(url)
	},
	editarProduto(id, body) {
		let url = '/produtos/editar/'+id
		return axios.put(url, body)
	},
	deletarProduto(id) {
		let url = '/produtos/deletar/'+id
		return axios.delete(url)
	}
}