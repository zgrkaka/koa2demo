<template>
  <div id="app">
    
    <nodeStudy />
    
  </div>
</template>

<script>
import nodeStudy from './components/node'

export default {
  name: 'app',
  components: {
    nodeStudy
  },
  data(){
    return{
      tableData:[]
    }
  },
  created(){
    // this.getList()
    // this.add()
  },
  methods:{
    // async getList(){
    //   let da = await this.$http.get('/test/list?name=ka&sex=25');
    //   this.tableData = da.data.data;
    //   console.log('xxxxx',da)
    // },

    // async add(){
    //   let data = {
    //       userName:'John',
    //       age:25,
    //       sex:1
    //     }

    //   let da = await this.$http.post('/test/add',data);
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
