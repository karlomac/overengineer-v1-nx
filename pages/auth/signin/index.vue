<template>
    <section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div class="max-w-5xl mx-auto">
            <div class="flex flex-col items-center md:flex-row">
                <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                    <p class="font-medium text-blue-500 uppercase">Over Engineering</p>
                    <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                        Changing The Way I Can Improve Your Business.
                    </h2>
                    <p class="text-xl text-gray-600 md:pr-16">
                        It does not mean I over engineer everything - just a well-rounded plan, a viable roadmap, a efficient engineering method.
                        I do not re-invent the wheel - i try to improve on it, perhaps make it better and work faster, handle more traffic,
                        improve customer handling.
                    </p>
                </div>

                <div class="w-full mt-16 md:mt-0 md:w-2/5">
                    <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                        <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>

                            <input type="text" name="email" v-model="cl.email" on:blur="showError = false" class="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address">
                            <input type="password" name="password" v-model="cl.password" class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Password">
                            <div class="block">
                                <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg" @click="signIn">Log Me In</button>
                            </div>

                        <p class="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="/auth/signup" class="text-blue-500 underline">Sign up here</a></p>
                        <div class="text-md text-rose-700 my-3" v-if="showError">
                            {{errorMessage}}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {
            showError: false,
            errorMessage: '',
            cl: {
                email: '',
                password: ''
            },
        }
    },

    mounted(){

    },

    methods: {
        async signIn() {
            // this will sign in
            await this.$awAccount.createEmailSession(this.cl.email, this.cl.password)
            .then(res=>{
                console.log('logged-in', res)
                this.$store.dispatch('mdLogin', true);

            })
            .catch(err=>{
                console.log('error-logoin', err)
            })
        }
    }
}
</script>