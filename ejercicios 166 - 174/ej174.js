const json = `{
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

const datos = JSON.parse(json);
console.log(datos.character.name);
console.log(datos.character.class);
console.log(datos.character.level);

console.log("inventario: ");
datos.character.inventory.forEach(function (item) {
    console.log(`- ${item.item}: ${item.effect}`)
});

console.log("Quests en progreso:");

datos.character.quests
    .filter(function (quest) {
        return quest.status === "In Progress";
    })
    .forEach(function (quest) {
        console.log(`- ${quest.name}`);
    });