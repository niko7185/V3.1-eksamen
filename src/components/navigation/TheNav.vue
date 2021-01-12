
<template>
    <nav>
        <router-link to="/home">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            Feed
        </router-link>
        <router-link to="/brews/beans">
            <round-button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </round-button>
            New Brews
        </router-link>
        <router-link to="/home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Favorites
        </router-link>
    </nav>
</template>

<script>
import RoundButton from '../UI/RoundButton.vue';

export default {
    components: {
        RoundButton,
    }
}
</script>

<style scoped>
    nav {
        display: flex;
        background: black;
        padding: 0 10px;
        justify-content:space-evenly;
    }
    svg {
        width: 2rem;
        margin-bottom: 5px;
        padding: 0rem;
        transition: width 0.4s, padding 0.4s;
    }
    button svg {
        width: 3rem;
        margin: 0px;
    }
    a {
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        position: relative;
        justify-content:flex-end;
    }
    
    a:hover {
        background: white;
        color: black;
    }

    a:active svg {
        width: 1rem;
        padding: 0.5rem;
    }

    a:active button svg {
        width: 2rem;
        margin: 0px;
    }

</style>
