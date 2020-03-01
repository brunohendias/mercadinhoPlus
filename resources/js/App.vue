<template>
  <div class="mt-3">
    <sidebar-menu :menu="menu" width="250px" :collapsed="true"></sidebar-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Menu',
          hiddenOnCollapse: true
        },
        {
          href: '/cadastroproduto',
          title: 'Cadastrar produto',
          icon: 'fas fa-cash-register',
        },
        {
          href: '/produtos',
          title: 'Editar produto',
          icon: 'fas fa-edit'
        }
      ]
    }
  },
  methods: {
    trocaRota(rota) {
      this.$router.push({
        name: rota,
        path: rota
      })
    }
  }
}
</script>