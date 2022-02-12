const headerModule = {
    namespaced: true,
    state: {
        drawer: false,
        group: null,
    },
    mutations: {
        setdrawer(state, payload) {
            state.drawer = payload;
        },
        setgroup(state, payload) {
            state.group = payload;
        },
    },
}
export default headerModule;