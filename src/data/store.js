import { reactive } from 'vue';

export const store = reactive({
  apiUrl : 'https://flynn.boolean.careers/exercises/api/boolgram/',
  posts:[],
  profiles:[],
  isLoading: false,
});