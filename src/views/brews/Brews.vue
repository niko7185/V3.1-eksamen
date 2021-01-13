
<template>
    <router-view></router-view>
</template>

<script>

export default {
    data() {
        return {
            brew: {
                beans: "",
                recipe: null,
            }
        };
    },
    beforeRouteEnter(_, _2, next) {
        const user = localStorage.getItem("user");
        next(!!user);
    },
    watch: {
        $route(value) {
            if (value.query) {
                switch (value.query.datatype) {
                    case "json":
                        this.brew[value.query.name] = JSON.parse(value.query[value.query.name]);
                        break;
                    default:
                        this.brew[value.query.name] = value.query[value.query.name];
                        break;
                }

                if (value.query.name) {
                    switch (value.query.name) {
                        case "beans":
                            this.$router.push("/brews/recipe");
                            break;
                        case "recipe":
                            this.$router.push("/brews/recipe");
                            break;

                        default:
                            
                            this.$router.push("/home");
                            break;
                    }
                }
            }
        }
    },
    created() {

        if (this.$route.matched.length < 2) {
            this.$router.push("/brews/beans");
        }
    }
}
</script>

