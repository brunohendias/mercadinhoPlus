export default {
	cadastrarProduto(body) {
		let url = '/api/v1/produtos/store'
		return axios.post(url, body)
	},
	listarProdutos() {
		let url = '/api/v1/produtos/listar'
		return axios.get(url)
	},
	buscarCategorias() {
		let url = '/api/v1/produtos/categorias';
		return axios.get(url)
	},
	buscaFiltrada(filtro) {
		let url = '/api/v1/produtos/fill/'
		return axios.post(url, filtro)
	},
	infoProduto(id) {
		let url = '/api/v1/produtos/info/'+id
		return axios.get(url)
	},
	editarProduto(id) {
		let url = '/api/v1/produtos/editar/'+id
		return axios.get(url)
	},
	updateProduto(id, body) {
		let url = '/api/v1/produtos/update/'+id
		return axios.put(url, body)
	},
	deletarProduto(id) {
		let url = '/api/v1/produtos/deletar/'+id
		return axios.delete(url)
	}
}