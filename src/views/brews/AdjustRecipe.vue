
<template>
    <base-wrapper>
        <form @submit.prevent="submitRecipe">
            <article>
                <section>
                <base-input name="coffeeAmount" 
                                label="Amount of coffee in grams:" 
                                placeholder="amount in grams..." 
                                inputType="number"
                                :defaultValue="recipe.coffeeAmount"
                                @value-change="getInput"
                                :errorMessage="''"></base-input>
                </section>
                <section>
                    <base-input name="water" 
                                label="Amount of water in ml:" 
                                placeholder="amount in ml..." 
                                inputType="number"
                                :defaultValue="recipe.water"
                                @value-change="getInput"
                                :errorMessage="''"></base-input>
                </section>
            </article>
            <label for="grind">Grinded level:</label>
            <select id="grind" v-model="recipe.grind">
                <option value="Coarse" >Coarse</option>
                <option value="Medium">Medium</option>
                <option value="Fine">Fine</option>
            </select>
            <base-wrapper>
                <recipe-display :tool="recipe.tool"
                                    :title="recipe.tool"
                                    :coffeeAmount="recipe.coffeeAmount"
                                    :water="recipe.water"
                                    :grind="recipe.grind"
                                    :time="recipe.time">
                </recipe-display>
            </base-wrapper>
            <confirm-button>Next</confirm-button>
        </form>
    </base-wrapper>
</template>

<script>
export default {
    data() {
        return {
            recipe: null,
        };
    },
    methods: {
        getInput(newValue, oldValue, name) {
            
            switch (name) {
                case "coffeeAmount":
                    if (newValue < 10 || newValue > 100) {
                        this.recipe[name] = oldValue;
                        return;
                    }
                    break;
                case "water":
                    if (newValue < 100 || newValue > 1000) {
                        this.recipe[name] = oldValue;
                        return;
                    }
                    break;
            }

            this.recipe[name] = newValue;
        },
        submitRecipe() {

            this.updateBrew("recipe", this.recipe, "guide");
        }
    },
    created() {
        this.recipe = this.getRecipe();

        if (!this.recipe) {
            this.$router.push("/home");
        }
    },
    inject: ["updateBrew", "getRecipe"],
}
</script>

<style scoped>
    article {
        display: flex;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    article section {
        flex: 1;
        margin: 0 10px;
    }

    label {
        display: block;
    }

    #grind {
        margin: 5px 0 1rem 0;
        padding: 0 5px;
    }
</style>
