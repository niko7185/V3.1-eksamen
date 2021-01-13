
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
    <confirm-button @click="submitRecipe">Next</confirm-button>
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
                    time: "12hours",
                    guide: [
                        "Grind the coffee coarsely, which you can do yourself at home or wherever you buy the beans",
                        "Combine the grounds with water, then let it steep overnight, or for around 12 hours",
                        "During this time, the coffee slowly infuses into the water, creating a strong," +
                            "concentrated brew. Strain the next morning, and you’re ready to go",
                    ],
                },
                {
                    tool: "French Press",
                    coffeeAmount: 50,
                    water: 100,
                    grind: "Coarse",
                    time: "10min",
                    guide: [
                        "The first step to fabulous French press coffee is to warm up the press. "+
                        "You can do this by boiling water and rinsing out the press."+
                         "This will help maintain the temperature while brewing",
                         "Start by measuring your desired amount of whole coffee beans. Use a burr grinder, whether manual or electric,"+
                         " to grind whole coffee beans into coarse, consistently-sized grounds",
                         "Discard any hot water from the French press, and add the coffee grinds to the empty press. "+
                         "Bring your desired amount of water to a boil, and then allow it to cool for one minute. Pour the water into the French press",
                         "Using a long spoon or stirrer, stir vigorously to break up the top layer",
                         "Allow the coffee to steep for an additional four minutes. Once the timer goes off, gently push the plunger "+
                         "all the way to the bottom of the press. Serve immediately, although you can always store any leftover coffee in "+
                         "a thermos to keep it warm for a while longer (but not too long, as it will start to get bitter as it sits)"
                    ],
                },
                {
                    tool: "Aeropress",
                    coffeeAmount: 18,
                    water: 300,
                    grind: "Medium",
                    time: "1min",
                    guide: [
                        "Bring your water to a boil then let it cool for about 1 minute. "+
                        "(You're aiming for something in between 175°F and 195°F.)",
                        "Measure out 2 full AeroPress of coffee beans and grind until fine",
                        "Assemble the AeroPress with a paper filter inside the cap and place on top of a mug or cup."+
                        " Drizzle a little warm water in to wet the filter",
                        "Place the funnel on top of the cup and pour in the coffee. Remove the funnel",
                        "Pour in coffee until it comes up to the top line on the AeroPress",
                        "Use the paddle stirrer (or a spoon) to stir once, briefly",
                        "Insert the plunger. Firmly press down the plunger until you hear a long hiss",
                        "Taste the coffee and if desired add more water",

                    ],
                },
                {
                    tool: "Kalita Wave",
                    coffeeAmount: 30,
                    water: 500,
                    grind: "Fine",
                    time: "3min",
                    guide: [
                        "Pour boiling water into the Kalita and decanter to preheat both. " + 
                        "Discard the water, and place a filter in the Kalita",
                        "Weigh out the coffee to be ground. Fill kettle and heat water",
                        "Grind coffee. The particle size should be just finer than sea salt",
                        "Just after boiling, remove kettle and let water settle. Start timer " + 
                        "and pour enough water to just saturate coffee bed. Let bloom, or expand for 30 seconds",
                        "Pouring in slow concentric circles, add enough water to raise slurry to about halfway "+
                        "up the side of filter. Continue adding water slowly in stages (also called pulse brewing),"+
                        " submerging the crust as you go and letting the slurry drop a little before adding water"+
                        " to bring it back to the same level",
                        "Try to add all water by 2:45-3:00. Once you’ve added all the water, give it a little stir "+
                        "if needed and let drain. You've done it right if the coffee bed is flat after draining",
                        "Remove the filter, Give it a good swirl and enjoy!",
                    ],
                },
                {
                    tool: "Chemex Brewer",
                    coffeeAmount: 30,
                    water: 500,
                    grind: "Medium",
                    time: "3.5min",
                    guide: [
                        "Grind within the 4-5 range depending on the bean",
                        "Heat water to 205°c and wash filter and Chemex",
                        "Start bloom to 80g and stir to saturate",
                        "Pour a full pour to the brim, letting it almost complete drawdown, to about 2-3 mins",
                        "Pour again till final weight",
                        "Swirl and pour into a flask for sharing",
                    ]
                },
            ],
        }
    },
    methods: {
        selectionChance(index) {
            this.selectedRecipe = index;
        },
        submitRecipe() {

            this.updateBrew("recipe", this.recipes[this.selectedRecipe], "adjust");

        }
    },
    inject: ["updateBrew"],
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
