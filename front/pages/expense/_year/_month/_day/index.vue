<!--
    Author: Youngjin Kwak
    Purpose: index.vue of expense
    Last Update: 10/12/2019
    Version: 1.0
 -->
<template>
    <div class="expense">
        <div class="twenty">
            <Expense />
        </div>
        <div class="left">
            <h1>Total of day: {{ sum }}</h1>
            <h1>Average of day: {{ avg }}</h1>
            <ul>
                <li style="background= e.color;" v-for="e in list">{{ e.title }}
                    <div class="detail" id="e.id">
                        <p>Content</p>
                        <div class="content-info">
                            <p v-html="e.content"></p>
                        </div>
                        <p>Consume: {{ e.money }}</p>
                        <i class="fas fa-trash" v-on:click="removeExpense(e.id)"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Expense from '~/components/expense';

export default {
    layout: 'default',
    components: {
        Expense,
    },
    data() {
        return {
        }
    },
    methods: {
        getList() {
            console.log(this.$route.params);
            const { year, month, day } = this.$route.params
            this.$store.dispatch('expenses/getList', {
                year,
                month,
                day,
            })
            .then((result) => {

            }).catch((error) => {
                console.error(error);
                alert('There is problem to get list');
            });
        },
        removeExpense(id) {
            this.$store.dispatch('expenses/removeExpense', {
                year: this.$route.params.year,
                month: this.$route.params.month,
                day: this.$route.params.day,
                id: id
            })
            .then((res) => {
                alert('Success to remove');
            }).catch((err) => {
                console.error(error);
                alert('There is problem to remove an element');
            });
        }
    },
    computed: {
        list() {
            return this.$store.state.expenses.list;
        },
        avg() {
            return this.$store.state.expenses.avg;
        },
        sum() {
            return this.$store.state.expenses.sum;
        }
    },
    beforeMount() {
        this.getList();
    },
    head() {
        return {
            title: 'Expense ' + this.$route.query.day,
        };
    },
}
</script>

<style lang="scss" scoped>
.expense {
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 100px;
}
.twenty {
    border: 1px solid black;
    float: left;
    margin-right: 20px;
    width: 30%;
}
.left {
    float: left;
    border: 1px solid black;
    width: 60%;
    height: 100%;
    margin-bottom: 20px;
    padding: 10px;

    .content-info {
        background-color: white;
    }
}
.left ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.left ul li {
    text-align: center;
    position: relative;
    padding: 12px 8px 12px 40px;
    margin-bottom: 10px;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.left ul li:nth-child(odd) {
    background: #f9f9f9;
}

.detail {
    text-align: left;
}
</style>