<template>
  <header class="header">
    <div class="container">
      <img class="header__logo" src="/images/logo.svg" alt="News" />

      <button class="header__trigger" type="button" aria-label="Open menu">
        <img src="~/assets/icons/icon-menu.svg" alt="" />
      </button>
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

  &__trigger {
    appearance: none;
    border: 0;
  }
}
</style>
