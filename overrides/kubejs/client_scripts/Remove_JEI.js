// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    event.hide(global.REMOVAL_REGEXS)

    event.hide([/.*spawn_egg.*/,
    'ars_nouveau:drygmy_se',
    'ars_nouveau:starbuncle_se',
    'ars_nouveau:whirlisprig_se',
    'ars_nouveau:wilden_hunter_se',
    'ars_nouveau:wilden_hunter_se',
    'ars_nouveau:wilden_stalker_se'])
})