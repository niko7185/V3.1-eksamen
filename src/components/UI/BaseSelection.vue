
<template>
    <base-wrapper :class="{active: index === selectedIndex}" @click="selectionChance">
        <slot></slot>
    </base-wrapper>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true,
        },
        selectedIndex: {
            type: Number,
            required: true,
        }
    },
    methods: {
        selectionChance() {
            this.$emit("select", this.index)
        }
    },
    emits: ["select"]
}
</script>

<style scoped>
    section {
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.6);
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .active {
        box-shadow: 0 0 2px 1px rgba(0, 255, 0, 0.6);
        background: rgba(0, 255, 0, 0.2);
    }
</style>

