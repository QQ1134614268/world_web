<template>
    <div>
        <div>用户名:<input name="username" title="用户名" v-model="username"></div>
        <div>密码:<input name="username" title="用户名" v-model="password"></div>
        <button @click="register">点击</button>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                username: "",
                password: "",
                message: "",
            }
        },
        methods: {
            async register() {
                let data = {"username": this.username, "password": this.password, "code": this.code}
                let url = '/api/user_api/register';
                let result = await this.$postJson(url, data);
                this.message = result.data.data;
                // this.$router.push({name: '/order/page1',params:{ id:'1'}});
                this.$router.push({name: '/user/login'});
            },
        },
    }
</script>

<style scoped>

</style>
