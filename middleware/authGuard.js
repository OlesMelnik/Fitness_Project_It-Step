export default function({store,route,redirect}){
    const user = store.state.user.user;
    if(!user & !(route.path == '/')){
        redirect('/login')
    }

}