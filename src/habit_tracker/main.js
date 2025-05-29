const habitForm = document.getElementById("habitForm");
const habitInput = document.getElementById("habitName");
const habitList = document.getElementById("habitList");

function createHabitElement(name) {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = name;
    title.className = "text-lg font-semibold text-gray-700 mb-2";

    const daysContainer = document.createElement("div");
    daysContainer.className = "flex gap-2 flex-wrap";

    for (let i = 0; i < 30; i++) {
        const box = document.createElement("div");
        box.className = "day-box";
        box.title = `Day ${i + 1}`;
        box.addEventListener("click", () => {
            box.classList.toggle("checked");
        });
        daysContainer.appendChild(box);
    }

    container.appendChild(title);
    container.appendChild(daysContainer);
    habitList.appendChild(container);
}

habitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const habitName = habitInput.value.trim();
    if (habitName) {
        createHabitElement(habitName);
        habitInput.value = "";
    }
});
