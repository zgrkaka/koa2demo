import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$_confirm = function(msg,cb){
  return new Promise((resolve, reject)=>{
    this.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if(cb && typeof cb ==='function'){
          // cb()
        }
        resolve()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });   
        reject()       
      });
  })
}
new Vue({
  render: h => h(App),
}).$mount('#app')
