<template>
  <div class='btree'>
    <h1>btree</h1>
    <el-tree :data='data' :draggable=true :expand-on-click-node=false :highlight-current=true @node-drag-enter='enter'
             @node-drop='moveNode'>
      <span class='custom-tree-node' slot-scope='{ node, data }'>
        <span>{{ data.value }}</span>
        <span>
          <el-button @click='() => showUpdateDialog(node, data)' size='mini'>
            updateNode
          </el-button>
        <span>
          <el-button @click='() => showDialog(data)' size='mini'>
            addNode
          </el-button>
        </span>
        <span>
          <el-button @click='() => delNode(node, data)' size='mini'>
            delNode
          </el-button>
        </span>
        </span>
      </span>
    </el-tree>

    <el-dialog :before-close='handleClose' :visible.sync='dialogVisible' title='提示' width='30%'>
      <span>新增</span>
      <span class='dialog-footer' slot='footer'>
      <input id='nodeValue' placeholder='请输入' type='text' v-model='value'>
      <el-button @click='dialogVisible = false'>取 消</el-button>
      <el-button @click='addNode' type='primary'>确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :before-close='handleClose' :visible.sync='updateDialogVisible' title='提示' width='30%'>
      <span>修改</span>
      <span class='dialog-footer' slot='footer'>
      <input id='updateNodeValue' placeholder='请输入' type='text' v-model='updateNodeValue'>
      <el-button @click='updateDialogVisible = false'>取 消</el-button>
      <el-button @click='updateNode' type='primary'>确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        dialogVisible: false,
        updateDialogVisible: false,
        value: '请输入',
        updateNodeValue: '',
        nodeData: null
      };
    },
    mounted: function () {
      this.getAllNodes()
    },
    methods: {
      async getAllNodes() {
        let url = '/btree_api/getAllNodes';
        let result = await this.$get(url);
        this.data = result.data.data;
      },
      // allowDrop(draggingNode, dropNode, type) {
      //   return type !== 'inner';
      // },
      async enter(draggingNode, dropNode, ev) {
        // console.log({draggingNode: draggingNode, dropNode: dropNode})
      },
      async moveNode(draggingNode, dropNode, dropType, ev) {
        let data = {id: draggingNode.data.id, targetId: dropNode.data.id, dropType: dropType}
        let url = '/btree_api/moveNode';
        await this.$postJson(url, data);
        dropNode.children.push(draggingNode);
      },
      async addNode() {
        let url = '/btree_api/addNode';
        let result = await this.$postJson(url, {id: this.nodeData.id, value: this.value});
        this.nodeData.children.push(result.data.data);
        this.dialogVisible = false
      },
      showDialog(data) {
        this.dialogVisible = true;
        this.nodeData = data
      },
      showUpdateDialog(data) {
        this.updateDialogVisible = true;
        this.updateNodeValue = data
      },
      async updateNode(data) {
        this.updateNodeValue = data.value;
        this.updateDialogVisible = true;
        let url = '/btree_api/updateNode';
        let result = await this.$postJson(url, {id: data.id, value: this.updateNodeValue});
        data.children.push(result);
      },
      getChildNodesById(id) {
        this.dialogVisible = true;
        let url = '/btree_api/getChildNodesById';
        let result = this.$postJson(url, {id: id});
        return result
      },
      async delNode(node, data) {
        let url = '/btree_api/delNode';
        await this.$postJson(url, {id: data.id});
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    }
  };
</script>
