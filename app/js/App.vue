<template>
  <div id="app">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="info">
      <b-navbar-brand>H</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/blog">Blog</router-link></b-nav-item>
        <b-nav-item><router-link to="/account">Account</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view></router-view>
    <!-- <app-user></app-user> -->
    <p>This is a test!</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
