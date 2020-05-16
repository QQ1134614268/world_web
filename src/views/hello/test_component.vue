<template>
    <div>
        <div> 测试导入对话框</div>
        <div>
            <err msg="this is test">
            </err>
        </div>
    </div>
</template>

<script>
    import err from "@/components/err.vue"

    export default {
        components: {
            err
        },
        name: "test_component"
    }
</script>

<style scoped>

</style>
