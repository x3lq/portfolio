<template>
    <header>
        <div class="brand-name">
            <nuxt-link to="/">
                x3lq
            </nuxt-link>
        </div>
        <div class="app-links">
            <app-link/>
        </div>
    </header>
</template>

<script>
    import AppLink from '~/components/appLink'

    export default {
        components: { AppLink }
    }
</script>

<style scoped lang="sass">
    header
        display: grid
        grid-template: 60px / auto 1fr
        align-items: center
        background-color: #333

        .app-links
            justify-self: end

        .brand-name
            margin: 0 10px
            font-size: 1.3rem

            a
                text-decoration: none
                color: white

        @media (max-width: 767px)
            header
                padding: 0 16px

                &:nth-child
                    justify-self: end !important

            .app-links
                display: none

        @media (min-width: 768px)
            header
                padding: 0 64px

            .app-links
                display: block
</style>
