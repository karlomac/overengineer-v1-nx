<template>
    <table class="table-auto text-left w-full my-3">
        <thead>
        <tr>
            <th>Computed Results</th>
            <th>Expected Output</th>
            <th>Rotation</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(lr, i) in results" :key="i">
                <td>{{lr.result}}</td>
                <td>{{lr.expectedOutput}}</td>
                <td>{{lr.d}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        leftrotate: {
            type: Array,
            default: [],
            required: true
        }
    },
    data() {
        return {
            results: []
        }
    },

    mounted() {
        // get the answer first to prevent the "rerender infinite loop issue"
        let resultObj = {}
        this.leftrotate.forEach(e => {
            resultObj = {
                result: this.rotateIt(e.d, e.arr),
                d: e.d,
                expectedOutput: e.expectedOutput
            }
            this.results.push(resultObj)
        })
    },

    methods: {
        rotateIt(d, arr) {
            if(arr.length == 0) return []
            let x = 0
            let arrx = [];
            let first = 0;
            arrx = arr;
            for(x = 1; x <= d; x++){
                first = arrx.shift()
                arrx.push(first);
            }
            return arrx
        }
    }


}
</script>