
<template>
    <label :for="name">{{ label }}</label>
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    <input v-if="inputType !== 'number'" :type="inputType" :placeholder="placeholder"
            :id="name" :class="{error: errorMessage }" v-model.trim="inputValue"/>
    <input v-else :type="inputType" :placeholder="placeholder" 
            :id="name" :class="{error: errorMessage }" v-model.number="inputValue"/>
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
        },
        defaultValue: {
            required: false,
            type: null,
        }
    },
    emits: ["value-change"],
    data() {
        return {
            inputValue: null,
        };
    },
    watch: {
        inputValue(newValue, oldValue) {
            
            
            if (this.defaultValue) {
                this.$emit("value-change", newValue, oldValue, this.name);

            }
            else {
                this.$emit("value-change", newValue, this.name);
            }
        },
    },
    created() {
        if (this.defaultValue) {
            this.inputValue = this.defaultValue;
        }
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
