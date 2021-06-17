<template>
  <form class="m-4" @submit.prevent="submit()">
  
  <div class="row mt-4">
    <div class="col">
      <label for="id" class="form-label float-start">Employee No.</label>
      <input v-model="employees.id" type="text" class="form-control" id="id" placeholder="Enter Employee Number">
    </div>
    <div class="col">
        <label for="name" class="form-label float-start">Name</label>
        <input v-model="employees.name" type="text" class="form-control" id="name" placeholder="Enter Name">
    </div>
  </div>
  <div class="row mt-4">
    <div class="col">
        <label for="emailId" class="form-label float-start">Email Id</label>
      <input v-model="employees.email" type="email" class="form-control" id="emailId" placeholder="Enter Email Id">
    </div>
    <div class="col">
        <label for="contact" class="form-label float-start">Contact</label>
      <input v-model="employees.contact" type="text" class="form-control" id="contact" placeholder="Enter Contact">
    </div>
  </div>
   <div class="row mt-4">
    <div class="col">
        <label for="age" class="form-label float-start">Age</label>
      <input v-model="employees.age" type="number" class="form-control" placeholder="Enter Age">
    </div>
    <div class="col">
        <label for="dob" class="form-label float-start">Date of Birth</label>
      <input v-model="employees.dob" type="date" class="form-control" id="dob" placeholder="dd-mm-yyyy">
    </div>
    <div class="col">
      <label for="gender" class="form-label float-start">Gender</label>
      <select class="custom-select form-control" v-model="employees.gender">
      <option selected disabled>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Other</option>

      </select>
    </div>
    <div class="col">
      <label for="blood" class="form-label float-start">Blood Group</label>
      <select class="custom-select form-select" id="blood" v-model="employees.bloodGroup">
      <option selected disabled>Select blood group</option>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">AB</option>
      <option value="4">O</option>
      </select>
    </div>
    </div>
    <div class="row mt-4 ">
    <div class="col">
      <label for="hometown" class="form-label float-start">Home town</label>
      <input type="text" class="form-control" id="hometown" placeholder="Enter Home Town" v-model="employees.homeTown">
    </div>
    <div class="col">
      <label for="Job profile" class="form-label float-start">Job profile</label>
      <input v-model="employees.jobProfile" type="text" class="form-control"  id="Job profile" placeholder="Enter Job profile ">
    </div>
    <div class="col">
      <label for="BusinessUnit" class="form-label float-start">Business unit</label>
      <input v-model="employees.businessUnit" type="text" class="form-control" id="BusinessUnit" placeholder="Enter Business unit">
    </div>
  </div>
  <div>
    <button class="btn btn-primary " type="button" @click="submit()" >Save</button>
  </div>
  
</form>
</template>

<script>
//import axios from 'axios'
export default {
  props:{
    mainEmployees:Object
  },

  data(){
    return{
      employees:{
        id:"",
        name:"",
        email:"",
        dob:"",
        contact:"",
        age:"",
        gender:"",
        homeTown:"",
        bloodGroup:"",
        jobProfile:"",
        businessUnit:""
      }
    }
  },
  created(){
    this.employees=this.mainEmployees;
  },
  methods:{
    submit(){
      console.log(this.employees)
      this.$emit('empSubmit',this.employees)
      
    }
    // add(){
    //   const newEmployee={
    //     id:this.employees.id,
    //     name:this.employees.name,
    //     email:this.employees.email,
    //     dob:this.employees.dob,
    //     contact:this.employees.contact,
    //     age:this.employees.age,
    //     gender:this.employees.gender,
    //     homeTown:this.employees.homeTown,
    //     bloodGroup:this.employees.bloodGroup,
    //     jobProfile:this.employees.jobProfile,
    //     businessUnit:this.employees.businessUnit

    //   }
    //   this.$emit('clicked',newEmployee)
    // }

  }
  
}
</script>