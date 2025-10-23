const formatStringNamed = (s, params) => {
    let modified = s

    for (const key in params) {

        const placeholder = '{' + key + '}'

        if (modified.indexOf(placeholder) !== -1) {
            modified = modified.replace(placeholder, params[key])
        }
    }

    return modified
}

console.log(
    formatStringNamed("un {substantiv} este {adjectiv}", {
        substantiv: "calut",
        adjectiv: "dragut"
    })
)
