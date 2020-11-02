export default function (vue) {
    let { route, redirect, store } = vue;
    if (!store.state.user.token) {
        // 判断没有token调到登录页面
        redirect('/login?redirect=' + route.path)
    }
    
}