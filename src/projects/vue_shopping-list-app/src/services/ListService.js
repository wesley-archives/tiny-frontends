const STORAGE_KEY = "shopping-list";

export function fetchItems() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

export function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function createItem(label, priority = "low") {
    return {
        id: crypto.randomUUID(),
        label,
        priority,
        purchased: false,
    };
}
