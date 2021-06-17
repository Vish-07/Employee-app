<template>
    <div class="m-2">
        <Form 
        :mainEmployees="employees"
        @empSubmit="add" />
    <div class="d-grid gap-2 d-md-flex justify-content-md-end m-5">
        <a href="/employee" class="btn btn-primary me-md-2">Back</a>
  
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            employees:{

            }
        }
    },
    methods:{
        add(newEmployee){
            console.log(newEmployee)
            axios.post('http://localhost:3000/api/v1.0/users',newEmployee)
            this.$router.push('/employee')
        
      
        }
        
}}
</script>