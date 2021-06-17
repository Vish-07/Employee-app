<template>
    <div class="m-2">
        <Form/>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end m-5">
  <button class="btn btn-primary me-md-2 " type="button" @click="Back()">Back</button>
  <button class="btn btn-primary " type="button">Save</button>
</div>
    </div>
</template>
<script>
export default {
    methods:{
        Back(){
            this.$router.push('/')
        }
    }
}
</script>