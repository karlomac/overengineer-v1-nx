<template>
    <div>
        <h1 class="text-3xl font-weight-bold text-center my-3">Count Instances</h1>

        <div class="text-center w-2/3 mx-auto my-3">
            <p>
                This solution uses the javascript functions Map and Filter to easily find and count
                the occurance of the given word array.
            </p>
            <count :countInstances="countInstances" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countInstances: [
                {
                str:
                    "Peter Piper picked a peck of pickled peppers A peck of pickled peppers Peter Piper picked",
                arr: ["peter", "a", "pepper", "piper", "The"],
                expectedOutput: [2, 2, 0, 2, 0]
                },
                {
                str:
                    "Betty Botter bought some butter But she said the butter’s bitter If I put it in my batter, it will make my batter bitter But a bit of better butter will make my batter better So ‘twas better Betty Botter bought a bit of better butter",
                arr: ["but", "Botter", "bit", "butter", "I", "and"],
                expectedOutput: [2, 2, 2, 3, 1, 0]
                },
                {
                str:
                    "How much wood would a woodchuck chuck if a woodchuck could chuck wood He would chuck he would as much as he could and chuck as much wood As a woodchuck would if a woodchuck could chuck wood",
                arr: ["as", "chuck", "could", "He", "dude", "much", "Woodchuck", "wood"],
                expectedOutput: [4, 5, 3, 3, 0, 3, 4, 4]
                },
                {
                str:
                    "Susie works in a shoeshine shop Where she shines she sits, and where she sits she shines",
                arr: ["where", "she", "but", "shines", "though", "sits"],
                expectedOutput: [2, 4, 0, 2, 0, 1]
                },
                {
                str:
                    "You know New York you need New York you know you need unique New York",
                arr: ["Unique", "pork", "york", "knew", "cork", "know"],
                expectedOutput: [1, 0, 3, 0, 0, 2]
                }
            ]
        }
    },

    methods: {

    }
}
</script>