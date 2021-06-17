<template>
<div class=" col d-flex justify-content-center align-items-center">
    <div class="card card-style border-info" @submit.prevent="login">
    <div class="card-body">
    <div class="row mt-4">
        <div class="col">
            <label for="emailId" class="form-label float-start"><b>Email Id</b></label>
            <input v-model="email" type="email" class="form-control" id="emailId" placeholder="Enter Email Id">
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <label for="password" class="form-label float-start"><b>Password</b></label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>
    </div>
    
    <div>
        <button type="submit" class="btn btn-primary m-4" @click="login">Login</button>
    </div>
    <div class="card-footer"> 
        <b class="m-1">Not a user? </b>
        <button type="submit" class="btn btn-primary">Register</button>
    </div>
  </div>
</div>
</div>

    

</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            error:null
        }
    },
    methods:{
        
        login() {
            this.$store.dispatch('login',{
                email: this.email,
                password: this.password
            })
            .then(()=>{
                this.$router.push('/employee')
            })
            .catch(err =>{
                this.error=err.response.error
            })
        }
    }
}
</script>
<style scoped>
.card-style{
    width:500px;
    background-color:aliceblue;
    margin:auto;
}
</style>