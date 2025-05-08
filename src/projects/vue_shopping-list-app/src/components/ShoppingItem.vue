<template>
  <li :class="[item.priority, { strikeout: item.purchased }]">
    <label>
      <input type="checkbox" v-model="item.purchased" />
      <span class="label">{{ item.label }}</span>
      <span class="priority">{{ item.priority }}</span>
    </label>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>
