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
    props: {
        recipe: {
            required: true,
        }
    },
    methods: {
        finished() {
            this.$emit("finish");
        }
    },
    emits: ["finish"],

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