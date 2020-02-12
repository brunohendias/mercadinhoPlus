export default {
	cadastrarProduto(body) {
		let url = '/cadastroproduto/store'
		return axios.post(url, body)
	},
	listarProdutos() {
		let url = '/produtos/listar'
		return axios.get(url)
	},
	deletarProduto(id) {
		let url = '/produtos/deletar/'+id
		return axios.delete(url)
	}
}