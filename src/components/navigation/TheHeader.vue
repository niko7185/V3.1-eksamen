
<template>
    <header>
        <h1>Brewista</h1>
        <nav v-if="!user">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="User icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="dropdown = !dropdown">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <ul class="dropdown" :class="{show: dropdown}">
                <li><router-link to="/login">Log in</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
            </ul>
        </nav>
        <nav v-else>
            <p>{{ user.userName }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="User icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="dropdown = !dropdown">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <ul class="dropdown" :class="{show: dropdown}">
                <li><a @click.prevent="logOut">Log out</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        user: {
            required: true,
        }
    },
    data() {
        return {
            dropdown: false,
        };
    },
    methods: {
        logOut(){
            localStorage.removeItem("user");

            this.$emit("logout");
        }
    },
    emits: ["logout"],
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        max-width: 60%;
        margin: 0 auto;
    }

    h1 {
        font-weight: 100;
        opacity: 0.5;
    }

    svg {
        width: 3rem;
        opacity: 0.5;
        cursor: pointer;
    }

    nav {
        position: relative;
        display: flex;
        align-items: center;
    }

    p {
        height: 1rem;
    }
    
    .dropdown {
        padding: 0px;
        margin: 0;
        list-style: none;
        text-align: left;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 2;
        background-color: white;
        overflow: hidden;
        top: 4rem;
        right: 0px;
        max-height: 0px;
        transition: max-height 0.6s;
    }

    .show {
        max-height: 100%;
    }

    .dropdown a {
        text-decoration: none;
        color: black;
        padding: 5px 10px;
        margin: 0px 10px;
        display: block;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    li:last-child a {
        border: none;
    }

    .dropdown a:hover {
        background: rgba(0, 0, 0, 0.4);
        color: white;
    }

</style>
