import { todosItems } from "../utils/todos";

export const state = () => ({
  todos: [],
  popupIsActive: false,
  searchValue: '',
  sortIsActive: false,
  sortByDataActive: false,
  sortByStatusActive: false,
})

export const mutations = {
  setTodos(state, data) {
    state.todos = data;
  },

  changeButtonStatus(state, id) {
    let todo = state.todos.find((item) => item.id === id);
    todo.done = !todo.done
  },

  openPopup(state) {
    state.popupIsActive = !state.popupIsActive;
  },

  addTodo(state, todo) {
    state.todos.unshift({ ...todo })
  },

  changeSearchValue(state, value) {
    state.searchValue = value;
  },

  changeSortButton(state) {
    state.sortIsActive = !state.sortIsActive
  },

  changeSortByData(state) {
    state.sortByDataActive = true;
    state.sortByStatusActive = false;
    state.sortIsActive = false;
  },

  changeSortByStatus(state) {
    state.sortByStatusActive = true;
    state.sortByDataActive = false;
    state.sortIsActive = false;
  },

  changeNotSort(state) {
    state.sortByStatusActive = false;
    state.sortByDataActive = false;
    state.sortIsActive = false;
  },

  initialiseStore(state) {
    if (localStorage.getItem('store')) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
    }
  }
}

export const actions = {
  getTodos({ commit }) {
    commit('setTodos', todosItems)
  }
}

export const getters = {
  getSearchTodos(state) {
    if (!state.searchValue) return state.todos;
    let isNumber = /^(0|-?[1-9]\d{0,5})$/.test(+state.searchValue);

    let items = []

    state.todos.forEach((item) => {
      if (item.text.includes(state.searchValue) || item.date.includes(state.searchValue) || isNumber && item.id === +state.searchValue) {
        items.push(item);
      }
    })
    return items;
  },

  getSortByData(state) {
    let items = [...state.todos];

    function parseDMY(string) {
      let b = string.split(/\D+/);
      return new Date(b[2], b[1] - 1, b[0]);
    }

    items.sort((a, b) => {
      return parseDMY(b.date) - parseDMY(a.date);
    })

    return items;
  },

  getSortByStatus(state) {
    let items = [];

    state.todos.forEach((item) => {
      if (item.done === false) {
        items.unshift(item)
      } else {
        items.push(item)
      }
    })
    return items
  }
}


/*
methods: {
  getStorage() {
    return JSON.parse(localStorage.getItem('todos'))

  },

  setStorage(value) {
    localStorage.setItem('todos', JSON.stringify(value))
  },

  updateStorage() {
    let storedTodos = this.getStorage();
    if (!storedTodos) storedTodos = {}

    storedTodos = this.$store.state.todos;
    this.setStorage(storedTodos)
  }
*/
