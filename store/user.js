import authGuard from "../middleware/authGuard"

export const state = () => ({
    user: null,
})

export const strict = false

export const mutations = {
    logUser(state,userFb){
        state.user = userFb
    }
}