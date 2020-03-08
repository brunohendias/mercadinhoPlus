<template>
  <div class="mt-3">
    <sidebar-menu :menu="menu" width="250px" class="sidebar" :collapsed="true"></sidebar-menu>
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
  }
}
</script>

<style>
  .sidebar {
    background-color: #1e1e21;
  }
</style>