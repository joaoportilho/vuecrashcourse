<!-- <script>
  export default {
    data() {
      return {
        name: "João Portilho",
        status: true,
        tasks: ['Task one', 'Task Two', 'Task Three'],
        link: "https://www.google.com",
      }
    },
    methods:{
      toggleStatus(){
        this.status = !this.status;
        console.log(this.status)
      },
      changeText(param){
        this.name = param.value
      }
    }
  }
</script>
<template>
  <h1>Olá, mundo! Eu sou o {{ name }}</h1>
  <p v-if="status === true">Só vou aparecer se tiver true</p>
  <p v-else>Só vou aparecer se tiver false</p>
  <h3>
    Tarefas:
  </h3>
  <ul>
    <li v-for="task in tasks">{{task}}</li>
  </ul>
  <!-- <a v-bind:href="link">Clica aqui pra ir pro google</a> -->
  <a :href="link">Clica aqui pra ir pro google</a>

  <!-- <button v-on:click="toggleStatus">Muda o status</button> -->
  <button @click="toggleStatus">Muda o status</button><br>
  <input type="text" @change="changeText(this)" :value="name"></input>
</template>

<style>

</style> -->