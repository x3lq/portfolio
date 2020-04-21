<template>
  <ul class="nav-list">
    <li class="nav-item">
      <nuxt-link to="/projects">
        Projects
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/blog">
        Blog
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppLink'
}
</script>

<style scoped lang="sass">
  .nav-list
    list-style: none
    padding: 0
    margin: 0

  .nav-item
    margin: 0 10px

    a
      text-decoration: none
      color: #fefefe

      &:hover, &:active
        color: #b4b4b4

  @media (max-width: 767px)
    .nav-list
      display: block

    .nav-item
      margin-top: 16px
      margin-bottom: 16px

  @media (min-width: 768px)
    .nav-list
      display: flex
</style>
