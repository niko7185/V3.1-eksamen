
<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        color: black;
        padding: 1rem;
        border-radius: 10px;
        border: 0px solid orange;
        background-color:yellow;
        margin: 5px;
        position: relative;
        left: 3px;
        top: 3px;
        outline:none;
        cursor: pointer;
        transition: background-color 0.5s, border-width 0.1s, left 0.1s, top 0.1s;
    }

    button:hover {
        background-color: gold;
    }

    button:active {
        border-width: 3px;
        left: 0px;
        top: 0px;
        
    }

</style>
