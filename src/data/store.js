import { reactive } from 'vue';

export const store = reactive({
  apiUrli : 'https://flynn.boolean.careers/exercises/api/boolgram/',
  posts:[],
  profiles:[],
  isLoading: false,
});