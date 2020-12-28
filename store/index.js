import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

const store = () =>
    new Vuex.Store({
        state: {
            characters: null,
            characterById: null,
            error: false,
            page: 1,
        },
        mutations: {
            updateСharacters(state, data) {
                state.characters = data.data.results;
                state.page += 1
            },
            addСharacters(state, data) {
                data.data.results.forEach(e => state.characters.push(e))
                state.page += 1
            },
            updateСharacterById(state, id) {
                state.characterById = null;
                state.characterById = Object.values(state.characters).filter(
                    e => e.id == id
                )[0];
            },
            errorFound(state) {
                console.log(e);
                state.error = true
            },
        },
        actions: {
            async fetchСharacters(ctx) {
                let data = await axios.get("https://rickandmortyapi.com/api/character").then(res => {
                    ctx.commit("updateСharacters", res);
                }).catch(e => {
                    ctx.commit("errorFound", e);
                })
            },
            async fetchMoreСharacters(ctx) {
                let data = await axios.get(`https://rickandmortyapi.com/api/character/?page=${ctx.getters.page}`).then(res => {
                    ctx.commit("addСharacters", res);
                }).catch(e => {
                    ctx.commit("errorFound", e);
                })
            },
            async fetchСharacterById(ctx, id) {
                await ctx.commit("updateСharacterById", id);
                return ctx.getters.characterById ? true : false;
            }
        },
        getters: {
            characters: s => s.characters,
            error: s => s.error,
            page: s => s.page,
            characterById: s => s.characterById
        },
        modules: {}
    });

export default store;