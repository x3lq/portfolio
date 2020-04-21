<template>
    <hero :data="data.hero"></hero>
</template>

<script>
    import Hero from '~/components/landingPage/hero'

    export default {
        name: 'LandingPage',
        components: { Hero },
        props: ['data']
    }
</script>

<style scoped>

</style>
