
<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        border: 5px solid white;
        background-color: #ffff84;
        padding: 1.2rem;
        border-radius: 50%;
        position: absolute;
        top: -80%;
        outline:none;
        cursor: pointer;
        transition: background 0.3s;
    }
    button:hover {
        background: #ffff48;
    }
</style>
