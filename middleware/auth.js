export default function ({ route, redirect, store }) {
    if (!store.state.user.token) {
        // 判断没有token调到登录页面
        redirect('/login?redirect=' + route.path)
    }
    
}