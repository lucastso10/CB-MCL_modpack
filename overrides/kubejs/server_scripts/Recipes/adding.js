ServerEvents.recipes(event => {
    event.shaped(
        Item.of('backpacked:backpack', 1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:string',
            C: 'minecraft:iron_ingot'
        }
    )

    event.smelting('minecraft:glass', '#forge:sand')

    event.shaped(
        Item.of('minecraft:glass_pane', 16),
        [
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:glass'
        }
    )
})