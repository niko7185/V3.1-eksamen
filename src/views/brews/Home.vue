<template>
  <h2 v-if="!user">
    You have to 
    <router-link to="/login">log in</router-link> 
    or 
    <router-link to="/register">register</router-link> 
    to make your brews
    </h2>
  <h2 v-else-if="!user.brews.length">You no brews yet</h2>
  <article v-else>
    <base-wrapper v-for="(brew, index) in user.brews" :key="index" class="brew">
      <div>
        <button @click="brew.favorite = !brew.favorite">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" v-if="brew.favorite">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <router-link :to="'/recipe:' + index">
        <recipe-display :tool="brew.recipe.tool"
                        :title="brew.beans.name"
                        :subTitle="brew.beans.company"
                        :coffeeAmount="brew.recipe.coffeeAmount"
                        :water="brew.recipe.water"
                        :grind="brew.recipe.grind"
                        :time="brew.recipe.time">
        </recipe-display>
      </router-link>
    </base-wrapper>
  </article>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.getUsers();
  },
  watch: {
    $route(value) {
      
      if (value.query.update || value.query.logout) {
        
        this.user = JSON.parse(localStorage.getItem('user'));
        
        this.$router.push("/home");
      }
    }
  },
    inject: ["getUsers"]
}
</script>

<style scoped>
  h2 {
    font-weight: normal;
    opacity: 0.4;
    text-align: center;
  }

  div {
    text-align: right;
  }

  button {
    background: none;
    outline: none;
    border: none;
    visibility: hidden;
    cursor: pointer;
  }

  button svg {
    width: 20px;
  }

  .brew:hover button {
    visibility: visible;
  }

  .brew {
    margin: 1rem 0;
  }

  a  {
    text-decoration: none;
    color: black;
  }

</style>
