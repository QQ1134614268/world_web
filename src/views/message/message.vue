<template>
    <div>
        <div>{{attentionList}}</div>
        <div>-------------------------------------------------</div>
        <div>{{userList}}</div>
        <div>-------------------------------------------------</div>
        <div>{{message}}</div>
        <div>
            <div>
                批量处理
                陌生人
                <div v-for="(item,k) in attentionList" v-if="item.group==1">
                    <div style="display: flex">
                        <div>{{k}}</div>
                        <div>
                            {{item.username}}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                亲人
                朋友
                唯一
            </div>
        </div>
        <div>
            <div>
                <div>用户</div>
            </div>
            <div v-for="(item,k) in attentionList">
                <div style="display: flex">
                    <div>
                        {{item.username}}
                    </div>
                </div>
            </div>
        </div>
        <div style="display: flex;">
            <div>查找</div>
            <input v-model="username"></input>
            <button @click="findUserByName">查找</button>
            <button @click="addAttention">添加</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message",
        data() {
            return {
                attentionList: [],
                userList: [],
                username: "",
                user: "",
                message: "",
            }
        },
        methods: {
            async getMyAttention() {
                let url = '/api/user_api/getAttentionList';
                let result = await this.$get(url);
                this.attentionList = result.data.data;
            },
            async addAttention() {
                let data = {
                    userId: this.user.id
                }
                let url = '/api/user_api/addAttention';
                let result = await this.$postJson(url, data);
                this.message = result.data.data;
            },
            async getUserAll() {
                let url = '/api/user_api/getUserAll';
                let result = await this.$get(url);
                this.userList = result.data.data;
            },
            async findUserByName() {
                let url = '/api/user_api/getUserByName';
                let data = {
                    username: this.username
                };
                let result = await this.$get(url, data);
                this.user = result.data.data;
            },
        },
        created() {
            this.getMyAttention()
            this.getUserAll()
        },
    }
</script>

<style scoped>

</style>
