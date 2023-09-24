<script setup lang="ts">
const isLargeScreen = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <header class="header">
    <div class="container">
      <img class="header__logo" src="/images/logo.svg" alt="News" />

      <NavigationDesktop v-if="isLargeScreen" />
      <NavigationMobile v-else />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1.75rem 0 2rem;

  &__logo {
    width: 44px;
    height: 28px;
  }

  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
