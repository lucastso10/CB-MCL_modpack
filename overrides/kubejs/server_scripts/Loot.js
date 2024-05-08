
console.info("Editing loot tables!")


LootJS.modifiers((event) => {

    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot(global.REMOVAL_REGEXS);
});