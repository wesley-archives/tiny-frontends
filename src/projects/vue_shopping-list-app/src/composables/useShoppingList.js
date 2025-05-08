import { ref, watch } from "vue";
import { fetchItems, saveItems, createItem } from "../services/ListService";

export function useShoppingList() {
    const items = ref(fetchItems());
    const newItem = ref({ label: "", priority: "low" });

    watch(items, () => {
        saveItems(items.value);
    }, { deep: true });

    function addItem() {
        if (!newItem.value.label.trim()) return;

        items.value.push(
            createItem(newItem.value.label, newItem.value.priority)
        );

        newItem.value = { label: "", priority: "low" };
    }

    return {
        items,
        newItem,
        addItem
    };
}
