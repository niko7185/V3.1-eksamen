
<template>
    <router-view></router-view>
</template>

<script>

export default {
    beforeRouteEnter(_, _2, next) {
        const user = localStorage.getItem("user");
        next(!!user);
    },
    created() {
        if (this.$route.matched.length < 2) {
            this.$router.push("/brews/beans");
        }
    }
}
</script>

