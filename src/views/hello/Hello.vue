<template>
    <div>
        <h1>{{ message }}</h1>
        <button v-on:click="getData">get 测试连通性</button>
        <button v-on:click="getData2">get 测试连通性2</button>
        <button v-on:click="postJson">postJson 测试</button>
        <div>
            <input type="file" ref="file1">
            <input type="file" ref="file2">
            <button v-on:click="postFormData">FormData 提交文件</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hello',
        data() {
            return {
                message: 'default'
            }
        },
        methods: {
            async getData() {
                let url = '/api/hello_api/hello';
                let result = await this.$get(url, {name: 'cat'});
                this.message = result.data.data;
            },
            async postJson() {
                let url = '/api/hello_api/post_json';
                let result = await this.$postJson(url, {"name": 'tom', "age": 1});
                this.message = result.data.data;
            },
            async postFormData() {
                let url = '/api/hello_api/post_formData';
                const file1 = this.$refs.file1.files[0];
                const file2 = this.$refs.file2.files[0];
                const data = new FormData();
                data.append('file1', file1);
                data.append('file2', file2);
                data.append('name', 'cat');
                let result = await this.$postForm(url, data)
                this.message = result.data.data;
            },
            getData2: function () {
                let that = this;
                let url = '/api/hello_api/hello';
                // url='http://127.0.0.1/api/hello_api/post_json?name=1'
                // let requestData = {};
                this.$axios.get(url)
                    .then(function (res) {
                        that.message = res.data.data;
                    })
                    .catch(function (err) {
                        alert(err);
                    })
            },
            postJson2: function () {
                let that = this;
                let url = '/api/hello_api/post_json';
                let requestData = {name: 'tom', age: 11};
                requestData = JSON.stringify(requestData);
                this.$axios.post(url, requestData)
                    .then(function (res) {
                        that.message = res.data.data;
                    })
                    .catch(function (err) {
                        alert(err);
                    })
            },
        }
    }
</script>
