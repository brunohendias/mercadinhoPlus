export default {
	cadastrarProduto(body) {
		let url = '/produtos/store'
		return axios.post(url, body)
	},
	listarProdutos() {
		let url = '/produtos/listar'
		return axios.get(url)
	},
	buscarCategorias() {
		let url = '/produtos/categorias';
		return axios.get(url)
	},
	buscaFiltrada(filtro) {
		let url = '/produtos/fill/'
		return axios.post(url, filtro)
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