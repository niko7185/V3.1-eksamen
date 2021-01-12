
<template>
    <label :for="name">{{ label }}</label>
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    <input :type="inputType" :placeholder="placeholder" :id="name" :class="{error: errorMessage }" v-model.trim="inputValue"/>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: "Input text under here",
        },
        placeholder: {
            type: String,
            default: "Input text here",
        },
        inputType: {
            type: String,
            default: "text",
        },
        errorMessage: {
            type: String,
            required: true,
        }
    },
    emits: ["value-change"],
    data() {
        return {
            inputValue: null,
        };
    },
    watch: {
        inputValue(newValue) {

            this.$emit("value-change", newValue, this.name);
        },
    }
}
</script>

<style scoped>
    label {
        display: block;
        margin-bottom: 5px;
        margin-top: 1rem;
    }
    
    input {
        margin: 0px;
        width: 100%;
    }

    p.error {
        color: red;
        margin: 5px 0;
    }

</style>
