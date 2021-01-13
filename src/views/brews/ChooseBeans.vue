
<template>
    <base-wrapper>
        <article>
            <base-selection v-for="(bean, index) in beans" :key="index" :index="index" :selectedIndex="selectedBean"
                            @select="selectionChance">
                <h3>{{ bean.name }}</h3>
                <p>{{ bean.company }}</p>
            </base-selection>
        </article>
    </base-wrapper>
    <confirm-button @click="submitBeans">Next</confirm-button>
</template>

<script>

export default {
    data() {
        return {
            beans: [
                {
                    name: "BEZA",
                    company: "Impact Roasters",
                },
                {
                    name: "COBRA BLEND",
                    company: "Black Coffee Roasters",
                },
                {
                    name: "Fazenda Estiva",
                    company: "La Cabra",
                },
                {
                    name: "Volcan Azul",
                    company: "April Coffee Roasters",
                },
            ],
            selectedBean: 0,
        };
    },
    methods: {
        selectionChance(index) {
            this.selectedBean = index;
        },
        submitBeans() {
            
            this.updateBrew("beans", this.beans[this.selectedBean], "recipe");
        }
    },
    inject: ["updateBrew"],
}
</script>

<style scoped>

    h3 {
        margin-bottom: 0px;
    }

    p {
        opacity: 0.6;
        margin: 5px 0;
    }

    article {
        display: flex;
        flex-wrap: wrap;
    }

    article section {
        flex: 1;
        margin: 10px;
    }
</style>
