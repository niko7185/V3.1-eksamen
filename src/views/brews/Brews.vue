
<template>
    <router-view></router-view>
</template>

<script>

export default {
    data() {
        return {
            brew: {
                beans: null,
                recipe: null,
                favorite: false,
            }
        };
    },
    methods: {
        updateBrew(name, value, next) {

            this.brew[name] = value;
            this.$router.push("/brews/" + next);
        },
        getRecipe() {

            return this.brew.recipe;
        },
        saveBrew() {

            const user = JSON.parse(localStorage.getItem("user"));

            const users = JSON.parse(localStorage.getItem("users"));
            
            user.brews.unshift(this.brew);

            localStorage.setItem("user", JSON.stringify(user));

            fetch("https://mood-app-storage-default-rtdb.firebaseio.com/brewista-users/" + user.id + ".json", {
                            method: "PATCH",
                            header: {
                                "Content-Type": "Application/json",
                            },
                            body: JSON.stringify({brews: user.brews}),
                        });

            if (!users) {
                this.getUsers();
            }
            else {
                
                const userIndex = users.findIndex(u => u.id === user.id);
                
                users[userIndex] = user;

                localStorage.setItem("users", JSON.stringify(users));
            }

            this.$router.push("/home");

        },
    },
    provide() {
        return {
            updateBrew: this.updateBrew,
            saveBrew: this.saveBrew,
            getRecipe: this.getRecipe,
        }
    },
    beforeRouteEnter(_, _2, next) {
        const user = localStorage.getItem("user");
        next(!!user);
    },
    created() {

        if (this.$route.matched.length < 2) {
            this.$router.push("/brews/beans");
        }

        this.getUsers();
    },
    inject: ["getUsers"],
}
</script>

