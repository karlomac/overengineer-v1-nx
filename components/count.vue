<template>
    <table class="table-auto text-left w-full my-3">
        <thead>
        <tr>
            <th>Computed Results</th>
            <th>Strings to Find</th>
            <th>Expected Results</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(ci, i) in countInstances" :key="i">
                <td>{{countIt(ci.str, ci.arr)}}</td>
                <td>{{ci.arr}}</td>
                <td>{{ci.expectedOutput}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        countInstances: {
            type: Array,
            required: true,
            default: []
        }
    },
    data() {
        return {

        }
    },

    methods: {
        countIt( str, arr ){
            //split the string
            let strArr = str.split(' ');

            // cycle the arr, filter and the length parameter returns the count 
            return arr.map(ele =>{
                return strArr.filter(e => e.toLowerCase() === ele.toLowerCase()).length
            })            
        }
    }
}
</script>