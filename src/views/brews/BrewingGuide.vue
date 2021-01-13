
<template>
    <recipe-display :title="recipe.tool"
                    :coffeeAmount="recipe.coffeeAmount"
                    :water="recipe.water"
                    :grind="recipe.grind"
                    :time="recipe.time">
    </recipe-display>
    
    <article>
        <p v-for="(step, index) in recipe.guide" :key="index">
            <span>STEP {{ index + 1 }}</span>
            {{ step }}
        </p>
    </article>

    <confirm-button @click="finished">Finish</confirm-button>

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
            if (this.$route.matched[0].name === "Brews") {
                this.saveBrew();
            }
            else {
                this.$router.push("/home");
            }
        }
    },
    beforeRouteEnter(_, _2, next) {
        const user = localStorage.getItem("user");
        next(!!user);
    },
    created() {
        
        if (this.$route.matched[0].name === "Brews") {
            this.recipe = this.getRecipe();
        }
        else {
            if (this.$route.params.brewId) {
                const user = JSON.parse(localStorage.getItem("user"));
                const brewId = parseInt(this.$route.params.brewId.slice(1));
                
                this.recipe = user.brews[brewId].recipe;
            }
            else {
                this.$router.push("/home");
            }
        }
        
    },
    inject: ["saveBrew", "getRecipe"],

}
</script>

<style scoped>
    article {
        margin-left: 6rem;
    }

    p {
        opacity: 0.6;
        margin-bottom: 5px;
    }

    span {
        display: block;
        opacity: 0.4;
        font-size: 0.75em;
        margin-bottom: 5px;
    }
</style>
