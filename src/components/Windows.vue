<template>
  <div>
    <slot name="header"></slot>
    <slot name="description"></slot>
    <button @click="$emit('toggle-favorite')">
      {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isFavorite: Boolean
  }
};
</script>

<style scoped>
img {
        height: 1.5em;
        float: right;
}
</style>