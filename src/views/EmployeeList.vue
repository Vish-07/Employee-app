<template>
   
   <div class="m-3">
     <a href="/employee/add" class="btn btn-dark float-start">Add Employee</a>
     
   <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Employee No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Contact</th>
      <th scope="col">Job Profile</th>
      <th scope="col">Business Unit</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="employee in employees" :key="employee">
      <th scope="row">{{employee.id}}</th>
      <td>{{employee.name}}</td>
      <td>{{employee.email}}</td>
      <td>{{employee.contact}}</td>
      <td>{{employee.jobProfile}}</td>
      <td>{{employee.businessUnit}}</td>
      <td><a href="/employee/Edit" class="btn btn-secondary">Edit</a></td>
      <td><button type="button" class="btn btn-danger" @click='showModal()'>Delete</button></td>
      
      <div v-if="showModal" class="modal"  id="modalId" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Alert!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure to delete entry of {{employee.name}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" >Delete</button>
      </div>
     </div>
   </div>
</div>
      
    </tr>
  </tbody>
</table></div>




</template>
<script>
import axios from 'axios' 


export default {
  data(){
    return{
      employees:[]

      
        }
  
  },
    methods:{
          showModal(){
          return true
        },
                
    },

  
  created(){
    
      axios
          .get('http://localhost:3000/api/v1.0/users')
          .then(response=>{
            this.employees=response.data.data
            
          })
          .catch(error=>{
            console.log("created -> error",error)
            
          })
  },
  
  
  
}
</script>
