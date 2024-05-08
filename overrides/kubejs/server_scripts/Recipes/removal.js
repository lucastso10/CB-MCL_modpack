
ServerEvents.recipes(event => {
    for (let regex of global.REMOVAL_REGEXS) {
        event.remove({output: regex})
    }
})
