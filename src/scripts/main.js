import { usePlants } from './field.js'
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)
let field = usePlants()
let bountifulHarvest = harvestPlants(field)
console.log(Catalog(bountifulHarvest))

let parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = Catalog(bountifulHarvest)

console.log(parentHTMLElement)