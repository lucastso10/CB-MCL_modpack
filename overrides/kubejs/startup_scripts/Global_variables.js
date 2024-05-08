// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

global.REMOVAL_REGEXS = [
    // remove os cabos pesados do mekanism
    /mekanism.*cable.*/,
    /mekanism.*pipe.*/,
    /mekanism.*tube.*/,
    /mekanism.*transporter.*/,


    // remove as tools esquisitas do industrialforegoing
    /.*industrialforegoing.*infinity.*/,

    // remove itens que facilitam o spawn de entidades do mob griding utils
    // mais para evitar lag server side
    /.*mob_grinding_utils.*feed.*/,
    /.*mob_grinding_utils.*mob_swab.*/,
    /.*mob_grinding_utils.*egg.*/,
    
    // itens de debug do mob grinding utils
    /.*mob_grinding_utils.*sword.*/,
    /.*mob_grinding_utils.*monocle.*/,

    // armas do pneumatic (já tem arma o suficiente nessa bomba)
    /.*pneumaticcraft.*gun_ammo.*/,
    /.*pneumaticcraft.*guard_drone.*/,
    /.*pneumaticcraft.*minigun.*/,

    // spawner do pneumatic craft (vai só usar o do apotheosis)
    /.*pneumaticcraft.*spawner.*/,

    // remove spawner do twilight e ice and fire
    /.*twilightforest.*spawner.*/,
    /.*iceandfire.*spawner.*/,

    // remove nigth googles (redundancia)
    'ic2:nightvision_goggles',

    // remove tnt de ore (dá recurso de graça muito roubado)
    'luckytntmod:ore_tnt',

    // remove as pipes do cyclic a ideia é só usar as do pipez
    /.*cyclic.*pipe.*/,

    // remove as recipes do casinocraft (só pode ser acessado no criativo)
    /.*casinocraft.*/
]