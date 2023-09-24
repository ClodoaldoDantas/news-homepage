<script setup lang="ts">
const isOpen = ref(false)
const offCanvasElement = ref(null)

function handleOpenMenu() {
  isOpen.value = true

  offCanvasElement.value.removeAttribute('aria-hidden')
  offCanvasElement.value.setAttribute('aria-modal', 'true')
  offCanvasElement.value.setAttribute('role', 'dialog')
}

function handleCloseMenu() {
  isOpen.value = false

  offCanvasElement.value.removeAttribute('aria-modal')
  offCanvasElement.value.removeAttribute('role')
  offCanvasElement.value.setAttribute('aria-hidden', 'true')
}

onKeyStroke(['Escape'], () => {
  if (isOpen.value) {
    handleCloseMenu()
  }
})

onMounted(() => {
  offCanvasElement.value.setAttribute('aria-hidden', 'true')
})
</script>

<template>
  <button
    class="trigger"
    type="button"
    aria-label="Open menu"
    @click="handleOpenMenu()"
  >
    <img src="~/assets/icons/icon-menu.svg" alt="" />
  </button>

  <div
    class="off-canvas"
    ref="offCanvasElement"
    :class="{ show: isOpen }"
    tabindex="-1"
    aria-labelledby="offcanvasTitle"
  >
    <h2 class="sr-only" id="offcanvasTitle">News Navigation</h2>

    <button
      class="trigger"
      type="button"
      aria-label="Close menu"
      @click="handleCloseMenu()"
    >
      <img src="~/assets/icons/icon-menu-close.svg" alt="" />
    </button>

    <nav class="navigation">
      <a href="#">Home</a>
      <a href="#">New</a>
      <a href="#">Popular</a>
      <a href="#">Trending</a>
      <a href="#">Categories</a>
    </nav>
  </div>

  <div v-if="isOpen" class="overlay" @click="handleCloseMenu()" />
</template>

<style lang="scss" scoped>
.trigger {
  background: transparent;
  border: 0;
}

.off-canvas {
  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 256px;
  z-index: 2;

  padding: 1.75rem 1.5rem;
  background-color: var(--off-white);

  display: flex;
  flex-direction: column;
  gap: 5.375rem;

  visibility: hidden;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  &.show {
    visibility: visible;
    transform: translateX(0);
  }

  & > button {
    align-self: flex-end;
  }
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    padding: 0.625rem;
    font-size: 1.125rem;
    color: var(--very-dark-blue);
    transition: color 200ms;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
