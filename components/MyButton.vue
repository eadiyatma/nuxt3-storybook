<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "Labelel",
  },
});
</script>

<template>
  <button>{{ label }}</button>
</template>
