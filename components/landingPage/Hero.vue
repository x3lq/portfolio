<template>
  <div
    v-if="this.backgroundImage"
    class="container"
    :style="{'background': 'linear-gradient( rgba(135, 36, 95, 0.6) 100%, rgba(135, 36, 95, 0.6) 100%), url(' + this.backgroundImage + ') no-repeat center center'}"
  >
    <div class="content">
      <div class="title">
        <h1>{{ this.data.Title }}</h1>
      </div>
      <div class="description">
        {{ this.data.Description }}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Hero',
        props: ['data'],
        data () {
            return {
                init: false
            }
        },
        computed: {
            backgroundImage () {
                if (!this.data.init) {
                    return null
                }
                return process.env.baseURL + this.data.BackgroundImage.url
            }
        },
        created () {
            this.data.init = true
        }
    }
</script>

<style scoped lang="sass">
    .container
        display: flex
        align-items: center
        width: 100%
        height: 600px
        background-size: cover
        color: white

    .content
        display: flex
        justify-content: center
        align-items: center
        text-align: center
        flex-flow: row wrap

    .title
        box-sizing: border-box
        flex: 1 0 100%
        h1
            padding: 0 30%
            font-size: 4rem

    .description
        box-sizing: border-box
        width: 70%
        flex: 1 0 100%
        padding: 0 22.5%
        margin-top: 20px
        font-size: 1.75rem
</style>
