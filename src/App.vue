<template>
   <nav>
       <router-link to="/">Главная</router-link> |
       <router-link to="/kurs">О курсах</router-link> |
       <router-link to="/tseli">Цели обучения</router-link> |
       <router-link to="/vse">Все курсы</router-link> |
       <router-link to="/trebov">Технические требования</router-link> |
       <router-link to="/kont">Контакты</router-link> |
       <router-link to="/ft">Записаться</router-link>
   </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
