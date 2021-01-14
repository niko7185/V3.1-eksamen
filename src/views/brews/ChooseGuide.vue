
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
            this.saveBrew();
        }
    },
    created() {
        
        this.recipe = this.getRecipe();
        
    },
    inject: ["saveBrew", "getRecipe"],
}
</script>
