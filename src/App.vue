<template>
<div>
  <div id="nav">
    
   
    <router-link to="/" class="ml-0"></router-link> 
    

  </div>
  <router-view/>
  </div>
</template>
<script>
export default {
  created(){
    const userString=localStorage.getItem('user')
    if(userString){
      const userData=JSON.parse(userString)
      this.$store.commit('SET_USER_DATA',userData)
    
    }
   }
  }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
