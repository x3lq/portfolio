<template>
  <div class="app-container">
    <nav-bar />
    <div class="app-content">
      <nuxt />
        <LandingPage v-if="landingPage" :data="landingPage"></LandingPage>
    </div>
  </div>
</template>

<script>
    import NavBar from '~/components/navBar'
    import LandingPage from '~/components/landingPage/LandingPage'

    export default {
        components: { NavBar, LandingPage },
        data () {
            return {
                landingPage: null
            }
        },
        created () {
            this.loadLanding()
        },
        methods: {
            loadLanding () {
                this.$apollo.query({
                    query: require('../api/graphql/landingpage/getLastLandingpage.graphql')
                }).then((response) => {
                    this.landingPage = response.data.landingPages[0]
                })
        }
        }
    }
</script>

<style lang="sass">
    html, body
        margin: 0
        height: 100%
        width: 100%
        font-family: 'BenchNine', sans-serif
        background-color: black

    .app-container
        height: 100%
        position: relative
        display: grid
        grid-template: auto 1fr auto / 1fr

    .app-content
        min-height: 100vh
        display: grid
        align-items: center
        justify-items: center
</style>
