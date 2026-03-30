function saveHabitProgress(index, count, html) {
    localStorage.setItem(`habit-${index}-count`, count);
    localStorage.setItem(`habit-${index}-html`, html);
}

function getHabitProgress(index) {
    return {
        count: parseInt(localStorage.getItem(`habit-${index}-count`)) || 0,
        html: localStorage.getItem(`habit-${index}-html`) || ""
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".habit-card");
    const stages = ["🌱", "🌿", "🌳", "🍎"];

    cards.forEach((card, index) => {
        const button = card.querySelector(".complete");
        button.type = "button";
        const tracker = card.querySelector(".tracker");
        const name = card.querySelector("h2").textContent;

        const habitData = getHabitProgress(index);

        if (habitData.count > 0) {
            button.dataset.count = habitData.count;
            tracker.innerHTML = habitData.html;

            if (habitData.count >= 21) {
                button.disabled = true;
                button.textContent = "Goal Reached!";
            }
        } else {
            button.dataset.count = 0;
        }

        button.addEventListener("click", function () {
            let count = parseInt(this.dataset.count) + 1;
            this.dataset.count = count;

            if (count <= 7) {
                tracker.textContent += stages[0]; 
            } else if (count <= 14) {
                if (count === 8) tracker.textContent = "";
                tracker.textContent += stages[1];
            } else if (count < 21) {
                if (count === 15) tracker.textContent = "";
                tracker.textContent += stages[2];
            } else {
                tracker.textContent = stages[3];
                this.disabled = true;
                this.textContent = "Goal Reached!";
            }

            this.setAttribute("aria-label", `Completed ${name} for day ${count}`);

            saveHabitProgress(index, count, tracker.innerHTML);
        });
    });
});