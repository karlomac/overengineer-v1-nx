<template>
    <section class="w-full bg-white">

    <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div class="relative">
                            <p class="mb-2 font-medium text-gray-700 uppercase">Work smarter</p>
                            <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you work smarter</h2>
                        </div>
                        <p class="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p>
                        <a href="#_" class="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                    <h4 class="w-full text-3xl font-bold">Signup</h4>
                    <p class="text-lg text-gray-500">or, if you have an account you can <a href="/auth/signin" class="text-blue-600 underline">sign in</a></p>
                    <div class="relative w-full mt-10 space-y-8">
                        <div class="relative">
                            <label  class="font-medium text-gray-900">Name</label>
                            <input id="name" type="text" v-model="cl.name" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name">
                        </div>
                        <div class="relative">
                            <label  class="font-medium text-gray-900">Email</label>
                            <input id="email" type="text" v-model="cl.email" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">Password</label>
                            <input id="password" type="password" v-model="cl.password" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password">
                        </div>
                        <div class="relative">
                            <a href="#_" @click="register" class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Create Account</a>
                        </div>
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
            cl: {
                name: '',
                email: '',
                password: '',
            }
        }
    },

    methods: {
        async register() {
            await this.$awAccount.create('unique()',this.cl.email,this.cl.password)
            .then(res=>{
                if(res){
                    console.log('successfully-registered-', res)
                }
            })
            .catch(err=>{
                console.log('err-registration', err)
            })
        }
    }
}
</script>