<template>
  <header>
      <a href="/">Home</a>
    </header>

    <main>
      <section>
        <ShoppingList />
      </section>
    </main>

    <footer>
      <p>
        Developed with 🧠 by
        <a href="https://github.com/wesleybertipaglia" target="_blank"
          >@wesleybertipaglia</a
        >
      </p>
    </footer>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";

export default {
  components: {
    ShoppingList,
  },
};
</script>
