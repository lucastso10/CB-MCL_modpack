// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

    // Alterando crafting do tempad
    event.remove({output: 'tempad:tempad' })

    event.shaped(
        Item.of('tempad:tempad', 1),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            A: 'minecraft:quartz_block',
            B: 'minecraft:redstone_lamp',
            C: 'minecraft:glass',
            D: 'minecraft:stone_button'
        }
    )

    // Alterando crafting do atomic dissasembler (picareta do mekanism)
    event.remove({output: 'mekanism:atomic_disassembler'})

    event.shaped(
        Item.of('mekanism:atomic_disassembler', 1),
        [
            'ABA',
            'ACA',
            'EDE'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:energy_tablet',
            C: 'mekanism:elite_induction_cell',
            D: 'mekanism:ingot_refined_obsidian',
            E: 'mekanism:ultimate_control_circuit'
        }
    )

    event.remove({output: 'chunkloaders:basic_chunk_loader'})

    event.shaped(
        Item.of('chunkloaders:basic_chunk_loader', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:obsidian',
            C: 'minecraft:ender_pearl'
        }
    )
  })