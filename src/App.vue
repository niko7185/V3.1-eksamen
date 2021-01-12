<template>
  <TheHeader :user="currentUser"
             @logout="currentUser = null"/>
  <router-view/>
</template>

<script>
import TheHeader from './components/navigation/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      currentUser: null,
    };
  },
  methods: {
    getUsers() {

      fetch("https://mood-app-storage-default-rtdb.firebaseio.com/brewista-users.json").then(promise => {
        if (promise.ok) {
          return promise.json();
        }

      }).then(data => {
        
        const users = [];
        for (const id in data) {
          users.push({
            id,
            userName: data[id].userName,
            password: data[id].password,
            gmail: data[id].gmail,
            brews: !data[id].brews ? [] : data[id].brews,
          });
        }
        
        localStorage.setItem("users", JSON.stringify(users));

      });

    },
    logInUser(user) {
      
      if (user) {
        localStorage.setItem("user", JSON.stringify(user))
        this.currentUser = user;
      }

    }
  },
  provide() {
    return {
      getUsers: this.getUsers,
      logInUser: this.logInUser,
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
