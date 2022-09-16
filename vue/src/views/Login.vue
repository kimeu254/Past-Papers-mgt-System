<template>
    <h3>Login</h3>
    <hr />
    <form>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <hr />
        <router-link :to="{name: 'register'}">
            <button type="button" class="btn btn-link">Register</button>
        </router-link>    <button type="button" class="btn btn-link">Reset Password</button>
    </form>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>
