export const state = () => ({
    products: []
})

export const getter = {
    products(state) {
        return state.products
    },
    count() {
        return state.products.length
    }
}

export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.$get('cart')

        commit('SET_PRODUCTS', response.data.products)

        return response;
    }
}