
<template>
    <guide-display :recipe="recipe" @finish="finished"></guide-display>

</template>

<script>
export default {
    data() {
        return {
            recipe: null,
        };
    },
    methods: {
        finished() {
            this.$router.push("/home");
        }
    },
    beforeRouteEnter(_, _2, next) {
        const user = localStorage.getItem("user");
        next(!!user);
    },
    created() {
        
        if (this.$route.params.brewId) {
            const user = JSON.parse(localStorage.getItem("user"));
            const brewId = parseInt(this.$route.params.brewId.slice(1));
            
            this.recipe = user.brews[brewId].recipe;
        }
        else {
            this.$router.push("/home");
        }
        
    },

}
</script>

