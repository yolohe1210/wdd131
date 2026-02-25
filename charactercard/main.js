let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    attacked: function() {
        this.health -= 20;
        if(this.health <= 0) {alert("Character died!"); this.health = 0;}
        this.update();
    },
    levelUp: function() {
        this.level += 1;
        this.update();
    },
    update: function() {
        document.querySelector(".name").textContent = this.name;

        const statLines = document.querySelectorAll(".stats p");
        statLines[0].textContent = "Class: " + this.class;
        statLines[1].textContent = "Level: " + this.level;
        statLines[2].textContent = "Health: " + this.health;
    }
};


document.addEventListener("DOMContentLoaded", function () {
    character.update();
    document.getElementById("attackBtn")
        .addEventListener("click", function () {
            character.attacked();
        });
    document.getElementById("levelupBtn")
        .addEventListener("click", function () {
            character.levelUp();
        });
});