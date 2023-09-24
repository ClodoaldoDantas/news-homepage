<template>
  <nav class="navigation">
    <a href="#">Home</a>
    <a href="#">New</a>
    <a href="#">Popular</a>
    <a href="#">Trending</a>
    <a href="#">Categories</a>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    padding: 0.625rem;
    font-size: 0.9rem;
    color: var(--dark-grayish-blue);
    transition: color 200ms;

    &:hover {
      color: var(--soft-red);
    }
  }
}
</style>
