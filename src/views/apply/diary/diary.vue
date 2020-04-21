<template>
    <div>
        <div v-for="(item,k) in recordList">
            <div>{{item.content}}</div>
        </div>
        <textarea v-model="content"></textarea>
        <button @click="add_speech">发表</button>
    </div>

</template>

<script>
    export default {
        name: "diary",
        data() {
            return {
                content: "",
                recordList: "",
            }
        },
        methods: {
            async add_speech() {
                let data = {"content": this.content}
                let url = '/api/message_api/add_speech';
                let result = await this.$postJson(url, data);
                this.get_record_all();
            },
            async get_record_all() {
                let url = '/api/message_api/get_speech_all';
                let result = await this.$get(url);
                this.recordList = result.data.data;
            },
        },
        created() {
            this.get_record_all()
        }
    }
</script>

<style scoped>

</style>
