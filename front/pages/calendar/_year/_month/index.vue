<template>
    <div>
        <div class="calendar-header">
            <i class="fas fa-angle-left" v-on:click="prevMonth()"></i>
            {{ year }} - {{ month }}
            <i class="fas fa-angle-right" v-on:click="nextMonth()"></i>
            <nuxt-link :to="{ name: 'calendar-year-month-detail', params: { year: year, month: month }}">Deatil</nuxt-link>
        </div>
        <div class="left">
            <div class="calendar">
                <ol class="day-names">
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ol>
                <ol class="days">
                    <nuxt-link :to="{ name: 'expense-year-month-day', params: { year: year, month: month, day: day }}" v-for=" day in days "><li>{{ day }}</li></nuxt-link>
                </ol>
            </div>
        </div>
        <div class="right">
            <h1>{{ yearOfavg }}</h1>
            <h1>{{ yearOfsum }}</h1>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            year: null,
            month: null,
            days: [],
            yearOfsum: 0,
            yearOfavg : 0,
        }
    },
    mounted() {

    },
    methods: {
        prevMonth() {
            let year = this.year;
            let month = this.month;
            month--;
            if(month == 0) {
                year--;
                month = 12;
            }
            this.$router.push({ name: 'calendar-year-month', params: { year:year, month: month} });
        },
        nextMonth() {
            let year = this.year;
            let month = this.month;
            month++;
            if(month == 13) {
                year++;
                month = 1;
            }
            this.$router.push({ name: 'calendar-year-month', params: { year:year, month: month} });
        },
    },
    beforeMount() {
        let today;
        let nMonth;
        let lastDate;
        let lastWeekNo;
        if (this.$route.params.year && this.$route.params.month) {
            today = new Date(this.$route.params.year, this.$route.params.month, 0);
            nMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
            lastWeekNo = Math.ceil((lastDate.getDate() + nMonth.getDay() - nMonth.getDate()) / 7);
        } else {
            today = new Date();
            nMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
            lastWeekNo = Math.ceil((lastDate.getDate() + nMonth.getDay() - nMonth.getDate()) / 7);
        }
        let days = []
            for (let i = 0; i < nMonth.getDay(); i++) {
                days.push('');
            }
            for (let i = 1; i < lastDate.getDate()+1; i++) {
                days.push(i);
            }
            this.days = days;
            this.year = today.getFullYear();
            this.month = today.getMonth() + 1;
    },
    head() {
        return {
            title: 'calendar',
        };
    },
    middleware: 'isLoggedIn',
}
</script>

<style lang="scss" scoped>
/* https://codepen.io/altitudems/pen/HLFKx */
$primary-color: #6EB590;
$secondary-color: #9987B5;

.left {
    float: left;
    width: 70%;
    margin: 10px;
}

.right {
    float: left;
    width: 20%;
    padding: 20px;
    text-align: center;
    margin: 10px;
    border: 1px solid black;
}
.calendar-header {
    text-align: center;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;

    i {
        margin-left: 10px;
        margin-right: 10px;
        color: $secondary-color;
    }

    i:hover {
        color: black;
    }

    .today {
        text-align: end
    }
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
*, *:before, *:after { box-sizing: border-box; }

.calendar {
    background: white;
    font-family: 'Quicksand', sans-serif;
    color: grey;
    padding: 3em;
    border: 1px solid gray;
    border-radius: 10px;
    .month { margin-top: 0; font-weight: normal; font-size: 3em; color: $primary-color; }
    ol {
        list-style: none; margin: 0; padding:0; @extend .clearfix;
        li { float: left; width: percentage(1/7); }
    }
    .day-names {
        border-bottom: 1px solid #eee;
        margin-bottom: .5em;
        li { text-transform: uppercase; margin-bottom: .5em}
    }
    .days {
    li {
        border-bottom: 1px solid #eee;
        margin-bottom: .5em;
        min-height: 8em;
        .date { margin: .5em 0; }
        .event {
            background: $primary-color;
            font-size: .75em;
            padding: 0 .75em;
            line-height: 2em;
            color: white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border-radius: 1em;
            margin-bottom: 1px;
            &.span-2 { width: 200%; }
            &.begin { border-radius: 1em 0 0 1em;}
            &.end { border-radius: 0 1em 1em 0;}
            &.all-day { background: $secondary-color; }
            &.clear { background: none;}
        }
        &:nth-child(n+29) { border-bottom: none; }
        &.outside .date { color: #ddd; }
    }
    a {
        color: grey;
        text-decoration: none;
    }
  }
}
</style>