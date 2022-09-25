<template>
    
</template>

<script>
    export default {
        async mounted() {
            const currentUser = this.$store.state.userProfile;
            if(currentUser) {

            }
            this.$store.dispatch('setUserProfile', {})
            this.$store.dispatch('setLogin', false)
            this.$router.push('/auth/login')
        }
    }
</script>