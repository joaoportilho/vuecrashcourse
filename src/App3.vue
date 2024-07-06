<!-- <script setup>
    import {onMounted, ref} from 'vue';

    const name = ref('João Portilho');
    const status = ref(true);
    const tasks = ref(['Task one', 'Task Two', 'Task Three']);
    const link = ref("https://www.google.com");
    const newTask = ref('');

    const toggleStatus = () => {
      status.value = !status.value;
      console.log(status.value)
    };
    const changeText = (param) => {
      console.log(param)
      name.value = param.value
    };

    const addTask = () => {
      if(newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    }

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

    onMounted(async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        tasks.value = data.map((task) => task.title);
      }catch(error){
        console.log('Error fetching tasks')
      }
    });

</script>
<template>
  <h1>Olá, mundo! Eu sou o {{ name }}</h1>
  <p v-if="status === true">Só vou aparecer se tiver true</p>
  <p v-else>Só vou aparecer se tiver false</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Nova tarefa:</label>
    <input id="newTask" name="newTask" type="text" v-model="newTask"></input>
    <button type="submit">Adicionar</button>
  </form>
  <h3>
    Tarefas:
  </h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
        <button @click="deleteTask(index)">x</button>
      </span>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Clica aqui pra ir pro google</a> -->
  <a :href="link">Clica aqui pra ir pro google</a>

  <!-- <button v-on:click="toggleStatus">Muda o status</button> -->
  <button @click="toggleStatus">Muda o status</button><br>
  
</template>

<style>

</style> -->