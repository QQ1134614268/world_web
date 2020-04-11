<template>
    <div>
        <div style="display: flex">
            <div>用户名:</div>
            <input name="username" title="用户名" v-model="username"></div>
        <div style="display: flex">
            <div>密码:</div>
            <input name="username" title="用户名" v-model="password"></div>
        <div style="display: flex">
            <div>验证码:</div>
            <input name="username" title="用户名" v-model="code">
            <img :src="codeImg" alt="Loading..." style="width: 80px ;height: 30px">
            <button @click="get_verify_code()"> 获取验证码</button>
        </div>
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    import Axios from 'axios'
    // import App from '@/App.vue'
    export default {
        name: "login",
        data() {
            return {
                username: "",
                password: "",
                code: "",
                message: "",
                codeImg: "",
            }
        },
        methods: {
            async get_verify_code() {
                //todo 生成url???
                let that = this
                Axios("http://127.0.0.1/api/user_api/get_verify_code", {
                    responseType: "arraybuffer",
                    params: {"username": that.username}
                }).then(function (response) {
                    //将从后台获取的图片流进行转换
                    return 'data:image/png;base64,' + btoa(
                        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                }).then(function (data) {
                    that.codeImg = data;
                }).catch(function (err) {
                })
            },
            async login() {
                let data = {"username": this.username, "password": this.password, "code": this.code}
                let url = '/api/user_api/login';
                let result = await this.$postJson(url, data);
                this.message = result.data.data;
                if (result.data.code == 1) {
                    localStorage.setItem("token", result.data.data)
                }
                this.$router.push({name: '/'});
            },
        },
        created() {
            this.get_verify_code();
        }
    }
</script>

<style scoped>

</style>
