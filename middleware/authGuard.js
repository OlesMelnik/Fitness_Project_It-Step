export default function({store,route,redirect}){
    const user = store.state.user.user;
    if(!user && !(route.path === '/') && !(route.path ==='/register') && !(route.path ==='/login')){
        redirect('/login')
    }
}