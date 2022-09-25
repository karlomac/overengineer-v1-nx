<template>
<div>
    <h1 class="text-3xl font-weight-bold text-center my-3">Left Rotation</h1>

    <div class="text-center w-5/6 mx-auto my-3">
        <p>
            This solution is simple that it takes the rotation in a loop.
            Inside the loop the first element of the array is extracted and the rest of the array
            shifted. The extracted array is then pushed at the end of the array.  This cycle
            continues until it completes via the supplied number of cycles.
        </p>
        <left :leftrotate="leftRotation" />
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            leftRotation: [
                {
                    id: 0,
                    d: 2,
                    arr: [1, 2, 3, 4, 5],
                    expectedOutput: [3, 4, 5, 1, 2]
                },
                {
                    id: 1,
                    d: 25,
                    arr: [12, 43, 76, 76, 45, 66, 34],
                    expectedOutput: [45, 66, 34, 12, 43, 76, 76]
                },
                {
                    id: 2,
                    d: 11,
                    arr: [25],
                    expectedOutput: [25]
                },
                {
                    id: 3,
                    d: 21,
                    arr: [],
                    expectedOutput: []
                },
                {
                    id: 4,
                    d: 258,
                    arr: [987, 234, 25, 16, 87, 45, 654, 342, 683, 256],
                    expectedOutput: [683, 256, 987, 234, 25, 16, 87, 45, 654, 342]
                }
            ],
            results: []
        }
    },

}
</script>