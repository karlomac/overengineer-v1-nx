<template>
    <table class="table-auto w-2/3 mx-auto my-3">
        <thead>
        <tr>
            <th>Computed Results</th>
            <th>Expected Output</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(fi, i) in findit" :key="i">
                <td class="text-center">{{JSON.stringify(findIt(fi.l1, fi.l2))}}</td>
                <td class="text-center">{{fi.expectedOutput}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        findit:  {
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
        findIt(L1, L2) {
            const L1s = [{x: L1[0][0], y: L1[0][1] }, {x: L1[1][0], y: L1[1][1]}]
            const L2s = [{x: L2[0][0], y: L1[0][1] }, {x: L2[1][0], y: L2[1][1]}]

            let a = (L1s[0].y - L1s[1].y) / (L1s[0].x - L1s[1].x);
            let b = (L2s[0].y - L2s[1].y) / (L2s[0].x - L2s[1].x);

            let denominator = ( (L2s[1].y - L2s[0].y) * (L1s[1].x - L1s[0].x) - (L2s[1].x - L2s[0].x) * (L1s[1].y - L1s[0].y) )

            if ( denominator === 0) return -1

            let ua = ( (L2s[1].x - L2s[0].x) * (L1s[0].y - L2s[0].y) - (L2s[1].y - L2s[0].y) * (L1s[0].x - L2s[0].x)) / denominator;
            let ub = ( (L1s[1].x - L1s[0].x) * (L1s[0].y - L2s[0].y) - (L1s[1].y - L1s[0].y) * (L1s[0].x - L2s[0].x)) / denominator;

            if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return -1;

            let x = L1s[0].x + ua * (L1s[1].x - L1s[0].x);
            let y = L1s[0].y + ua * (L1s[1].y - L1s[0].y);

            return x + y
        }
    }

}
</script>