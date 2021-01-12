
<template>
    <label :for="name">{{ label }}</label>
    <input :type="inputType" :placeholder="placeholder" :id="name" v-model.trim="inputValue"/>
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
            default: "Input tekst herunder",
        },
        placeholder: {
            type: String,
            default: "Input tekst her",
        },
        inputType: {
            type: String,
            default: "text",
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

</style>
