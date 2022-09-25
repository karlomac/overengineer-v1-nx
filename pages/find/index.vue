<template>
<div>
    <h1 class="text-3xl font-weight-bold my-3 text-center">Find Intersection</h1>

    <div class="text-center w-2/3 mx-auto">
        <p>
            This solution is based on the math by Paul Bourke, which was translated to javascript with
            the conversion of the input into the correct coordinates. <br>
            <span class="text-indigo-600">Note that line 3 shows a result of 4.
                this may be due to the rounding affect of the computations.
            </span>
        </p>
        <findit :findit="findIntersection" />

    </div>

</div>
</template>

<script>
export default {
    data(){
        return {
            findIntersection: [
                {
                l1: [
                    [1, 10],
                    [1, 4]
                ],
                l2: [
                    [8, 2],
                    [2, 2]
                ],
                expectedOutput: -1
                },
                {
                l1: [
                    [1, 4],
                    [1, 10]
                ],
                l2: [
                    [8, 2],
                    [0, 2]
                ],
                expectedOutput: -1
                },
                {
                l1: [
                    [1, 10],
                    [1, 0]
                ],
                l2: [
                    [8, 2],
                    [0, 2]
                ],
                expectedOutput: 3
                },
                {
                l1: [
                    [1820, 910],
                    [1312, 910]
                ],
                l2: [
                    [1440, 0],
                    [1440, 1552]
                ],
                expectedOutput: 2350
                }
            ]
        }
    },

    methods: {

    }
}
</script>