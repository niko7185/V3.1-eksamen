
<template>
    <base-wrapper>
        <article>
            <base-selection v-for="(recipe, index) in recipes" :key="index" :index="index" :selectedIndex="selectedRecipe"
                        @select="selectionChance">
                <recipe-display :tool="recipe.tool"
                                :title="recipe.tool"
                                :coffeeAmount="recipe.coffeeAmount"
                                :water="recipe.water"
                                :grind="recipe.grind"
                                :time="recipe.time">
                </recipe-display>
            </base-selection>
        </article>
    </base-wrapper>
    <confirm-button>Next</confirm-button>
</template>

<script>
export default {
    data() {
        return {
            selectedRecipe: 0,
            recipes: [
                {
                    tool: "Cold Infusion",
                    coffeeAmount: 113,
                    water: 907,
                    grind: "Coarse",
                    time: "12hours"
                },
                {
                    tool: "French Press",
                    coffeeAmount: 50,
                    water: 50,
                    grind: "Coarse",
                    time: "10min"
                },
                {
                    tool: "Aeropress",
                    coffeeAmount: 18,
                    water: 300,
                    grind: "Medium",
                    time: "1min"
                },
                {
                    tool: "Kalita Wave",
                    coffeeAmount: 30,
                    water: 500,
                    grind: "Fine",
                    time: "3min"
                },
                {
                    tool: "Chemex Brewer",
                    coffeeAmount: 30,
                    water: 500,
                    grind: "Medium",
                    time: "3.5min"
                },
            ],
        }
    },
    methods: {
        selectionChance(index) {
            this.selectedRecipe = index;
        },
        submitRecipe() {
            this.$router.push({path: "/brews", query: 
            { 
                recipe: JSON.stringify(this.recipes[this.selectedRecipe]),
                datatype: "json",
                name: "recipe",
            }});
        }
    }
}
</script>

<style scoped>

    article {
        display: grid;
        grid-gap: 15px;
    }
    
    @media screen and (min-width: 750px) {
        article > section:nth-child(1) {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        article > section:nth-child(2) {
            grid-column: 2/3;
            grid-row: 1/2;
        }
        article > section:nth-child(3) {
            grid-column: 1/2;
            grid-row: 2/3;
        }
        article > section:nth-child(4) {
            grid-column: 2/3;
            grid-row: 2/3;
        }
        article > section:nth-child(5) {
            grid-column: 1/2;
            grid-row: 3/4;
        }
        article > section:nth-child(6) {
            grid-column: 2/3;
            grid-row: 3/4;
        }
    }


</style>
