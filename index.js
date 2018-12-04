const koa = require('koa');
const app = new koa();
const fs = require('fs');
const router = require('koa-router')()
const mysql = require('mysql')
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const connection = mysql.createConnection({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '831015',   // 数据库密码
  database : 'test'  // 选中数据库
})

router.post('/test/del', async (ctx, next) => {//删除接口
  let req = ctx.request.body;
  let _SQL = `delete from userData where id='${req.id}'`;

  let da = await new Promise(function(resolve,reject){
   connection.query(_SQL,  (error, results, fields) => {
       if (error) throw error
       return resolve(results)
     });

   })
   ctx.body = {
     data:da,
     msg:'',
     code:'000000'
   };
 })
router.post('/test/edit', async (ctx, next) => {//修改接口
  let req = ctx.request.body;
  let values = Object.values(ctx.request.body)
  let sqlStr = Object.keys(ctx.request.body).map(item=>{
    if(typeof req[item]=='string'){//字符串需要加上单引号才能作为sql查询语句
      return `${item} = '${req[item]}'`
    }
    return `${item} = ${req[item]}`
  });
  
  let _sql = `update userData set ${sqlStr.join(',')} where id='${req.id}'`;//sql查询语句

  let da = await new Promise(function(resolve,reject){
   connection.query(_sql,  (error, results, fields) => {
       if (error) throw error
       return resolve(results)
     });

   })
   ctx.body = {
     data:da,
     msg:'',
     code:'000000'
   };
 })
  router.get('/test/list', async (ctx, next) => {//查询接口
    
   let da = await new Promise(function(resolve,reject){
    connection.query(`SELECT * from userData`,  (error, results, fields) => {
        if (error) throw error
        return resolve(results)
      });

    })
    ctx.body = {
      data:da,
      msg:'',
      code:'000000'
    };
  })

  
  router.post('/test/add', async (ctx, next) => {//新增接口
    console.log('ctx.request.body',ctx.request.body);
    let req = ctx.request.body;
    let keysArr = Object.keys(ctx.request.body);
    let values = Object.values(ctx.request.body).map((item,index)=>{//字符串需要加上单引号才能作为sql查询语句
      if(typeof item == 'string'){
        item = `'${item}'`
      }
      return item 
    })
    let _sql = `insert into userData values (null,${values.join(',')})`;

    let da = await new Promise(function(resolve,reject){
      connection.query(_sql,  (error, results, fields) => {
          if (error) throw error
          return resolve(results)
        });
  
      })
      ctx.body = {
        data:da,
        msg:'',
        code:'000000'
      };
     
   })


  app.use(router.routes()); //作用：启动路由
  app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('server is running at 3000 port')
})