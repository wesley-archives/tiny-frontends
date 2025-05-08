<template>
  <div>
    <h1>Shopping List App</h1>

    <label class="form">
      <input
        v-model="newItem.label"
        type="text"
        placeholder="Add an item"
      />
      <select v-model="newItem.priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button :disabled="newItem.label.length === 0" @click="addItem">
        Add
      </button>
    </label>

    <div>
      <p v-if="items.length === 0">
        Nice job! You've bought all your items!
      </p>
      <ul class="shopping-list">
        <ShoppingItem
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ShoppingItem from "./ShoppingItem.vue";
import { useShoppingList } from "../composables/useShoppingList";

export default {
  components: {
    ShoppingItem,
  },
  setup() {
    const { items, newItem, addItem } = useShoppingList();

    return {
      items,
      newItem,
      addItem
    };
  },
};
</script>
