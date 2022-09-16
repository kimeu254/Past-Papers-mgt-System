<template>
    <h3>Register</h3>
    <hr />
    <form>
        <div class="form-group">
            <input type="name" class="form-control" id="exampleInputFirstName" placeholder="Enter First Name">
        </div>
        <div class="form-group">
            <input type="name" class="form-control" id="exampleInputLastName" placeholder="Enter Last Name">
        </div>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <input type="password_confirm" class="form-control" id="exampleInputPassword2" placeholder="Re-enter your Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <hr />
        <router-link :to="{name: 'login'}">
            <button type="button" class="btn btn-link">Login</button>
        </router-link>
        <button type="button" class="btn btn-link">Reset Password</button>
    </form>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>

</style>
