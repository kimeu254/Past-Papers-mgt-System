<template>
    <h3>Register</h3>
    <hr />
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
