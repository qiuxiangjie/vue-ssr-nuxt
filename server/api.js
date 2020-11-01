
const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')({ prefix: '/api' })
 

app.keys = ['some secret', 'another secret'];

const goods = [
    { id: 1, text: '我是商品1', price: 1000 },
    { id: 2, text: '我是商品2', prece: 2000 }

]


router.get('/goods', ctx => {
    ctx.body = {
        code: 200,
        data:goods
    }
})

router.get('/detail', ctx => {
    ctx.body = {
        code: 200,
        data: goods.find(item => goods.id === ctx.query.i)
    }
})


router.post('/login', ctx => {
    const user = ctx.request.body;
    if (user.userName === 'admin' && user.password === '123') {
        const token = 'a mock token';
        ctx.cookies.set('token', token);
        ctx.body = {
            code: 200,
            token
        
        }
    } else {
        ctx.body = {
            code: 401,
            msg: '登录失败！'
        }
    }
   
})


// 解析post数据并注册路由
app.use(bodyparser());
app.use(router.routes());
app.listen(8888, () => {
    console.log('node 服务器启动完成！')
})