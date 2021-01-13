<template>
  <TheHeader :user="currentUser"
             @logout="currentUser = null"/>
  <main>
    <router-view/>
  </main>
  <footer>
    <TheNav />
  </footer>
</template>

<script>
import TheHeader from './components/navigation/TheHeader.vue';
import TheNav from './components/navigation/TheNav.vue';

export default {
  components: {
    TheHeader,
    TheNav,
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
        this.$router.push("/home?update=true");
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
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}

main {
  max-width: 95%;
  margin: 0 auto 10rem auto;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0px;
}

@media screen and (min-width: 800px) {
  main {
    max-width: 80%;
  }
}

</style>
