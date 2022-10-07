export let Catalog = (harvestObj) => {
    let htmlString = ""
        for (let plant of harvestObj) {
            htmlString += `
            <section class="plant">${plant.type}</section>
            `
        }
    return htmlString
}