<template>
    <div>
        <div class="hello">
            <div id="aaa">1111</div>
            <div class="c">
                <div>
                    kkk
                </div>
                <div>
                    kkk
                </div>
            </div>
            <div>333</div>
        </div>
        <div class="d" style="height: 10px">
            <div>1111</div>
            <div>
                <div class="e">
                    kkk
                </div>
                <div class="e">
                    kkk
                </div>
            </div>
            <div>333</div>
        </div>
    </div>
</template>


<style>
    .hello {
        display: flex;
        justify-content: space-between;
        /* 主轴展现方式 flex-start flex-end; center space-around; space-between;*/
        /*align-content: flex-start;*/

        align-items: flex-start;
        /* 侧展现方式 stretch flex-start flex-end;baseline center;*/
        height: 200px;
        /*flex-grow: 1;*/
        /*flex-shrink: 2;*/
        /*flex-basis: 2px;*/
        /*flex 是 flex-grow,flex-shrink,flex-basis的缩写; flex-flow 是 flex-direction flex-wrap缩写*/
        /*flex :2 = flex-grow:2*/
    }

    /*.hello div{*/
    /*  align-self: flex-end;*/
    /*}*/
    #aaa {
        align-self: flex-end;
    }

    .c {
        display: flex;
        flex-direction: column;
    }

    .d {
        display: inline-block;
        width: 100px;
    }

    .e {
        display: inline-block;
        width: 100px;
        height: 20px;
    }

    div {
        border: 2px solid #FF0000;
        margin: 2px;
    }
</style>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                webSite: 'world',
                msg: 'Hello world',

            }
        }
    }
</script>
