<template>
    <div class="ml-3">
        <div>
            <h2 class="text-center mb-4 mt-4">Coronavirus en Belgique</h2>
            <div class="container">
                <div class="row">
                    <StatCard :stat="belgium.cases" text="CAS" :isBad="true"/>
                    <StatCard :stat="belgium.deaths" text="MORTS" :isBad="true"/>
                    <StatCard :stat="belgium.recovered" text="GUÉRISONS"/>
                </div>
                <div class="row">
                    <StatCard :stat="belgium.todayCases" text="CAS HIER" :isBad="true"/>
                    <StatCard :stat="belgium.todayDeaths" text="MORTS HIER" :isBad="true"/>
                    <StatCard :stat="belgium.todayRecovered" text="GUÉRISONS HIER"/>
                </div>
            </div>
        </div>
        <div>
            <h2 class="text-center mb-4 mt-4">Coronavirus dans le monde</h2>
            <div class="container">
                <div class="row">
                    <StatCard :stat="worldwide.cases" text="CAS" :isBad="true"/>
                    <StatCard :stat="worldwide.deaths" text="MORTS" :isBad="true"/>
                    <StatCard :stat="worldwide.recovered" text="GUÉRISONS"/>
                </div>
                <div class="row">
                    <StatCard :stat="worldwide.todayCases" text="CAS HIER" :isBad="true"/>
                    <StatCard :stat="worldwide.todayDeaths" text="MORTS HIER" :isBad="true"/>
                    <StatCard :stat="worldwide.todayRecovered" text="GUÉRISONS HIER"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import StatCard from './StatCard';

export default {
    name: 'CoronaStatsByCountry',
    components: {
        StatCard,
    },
    data: () => ({
        loading: true,
        belgium: {
            cases: '?',
            todayCases: '?',
            deaths: '?',
            todayDeaths: '?',
            recovered: '?',
            todayRecovered: '?',
        },
        worldwide: {
            cases: '?',
            todayCases: '?',
            deaths: '?',
            todayDeaths: '?',
            recovered: '?',
            todayRecovered: '?',
        },
    }),
    mounted() {
        this.getBelgiumStats();
        this.getWorldwideStats();
    },
    methods: {
        formatApiResponse(toFormat) {
            const formatter = new Intl.NumberFormat('be-FR');
            return {
                cases: formatter.format(toFormat.cases),
                todayCases: formatter.format(toFormat.todayCases),
                deaths: formatter.format(toFormat.deaths),
                todayDeaths: formatter.format(toFormat.todayDeaths),
                recovered: formatter.format(toFormat.recovered),
                todayRecovered: formatter.format(toFormat.todayRecovered),
            }
        },
        getBelgiumStats() {
            axios.get('https://corona.lmao.ninja/v2/countries/Belgium', {
                params: {
                    yesterday: true,
                    strict: true,
                },
            }).then(res => {
                this.belgium = this.formatApiResponse(res.data);
            });
        },
        getWorldwideStats() {
            axios.get('https://corona.lmao.ninja/v2/continents', {
                params: {
                    yesterday: true,
                },
            }).then(res => {
                const data = res.data.reduce((prev, curr) => {
                    return {
                        cases: prev.cases + curr.cases,
                        todayCases: prev.todayCases + curr.todayCases,
                        deaths: prev.deaths + curr.deaths,
                        todayDeaths: prev.todayDeaths + curr.todayDeaths,
                        recovered: prev.recovered + curr.recovered,
                        todayRecovered: prev.todayRecovered + curr.todayRecovered,
                    }
                });
                this.worldwide = this.formatApiResponse(data);
            });
        }
    },
}
</script>