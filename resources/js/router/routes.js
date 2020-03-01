const ListarProduto = () => import('../components/listar/listarProduto.vue')
const CastrarProduto = () => import ('../components/cadastro/cadastrarProduto.vue')

export const routes = [
	{
		path: '/',
		redirect: '/cadastroproduto'
	},
	{
		path: '/cadastroproduto',
		name: 'cadastro',
		component: CastrarProduto
	},
	{
		path: '/produtos',
		name: 'listar',
		component: ListarProduto
	}
]