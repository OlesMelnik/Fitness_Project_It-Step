
export const state = () => ({
    auth: {
        uid: null,
    },
})


export const getters = {
    authenticated(state) {
        return state.auth.uid;
    },
}

export const mutations = {
    auth(state, {uid}) {
        state.auth.uid = uid;

        try {
            this.$cookies.set('uid', uid, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
        } catch(ex) {}
    },
}