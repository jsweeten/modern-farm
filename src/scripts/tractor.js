import { addPlant } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

let asparagusSeed = createAsparagus()
let cornSeed = createCorn()
let potatoSeed = createPotato()
let soybeanSeed = createSoybean()
let wheatSeed = createWheat()
let sunflowerSeed = createSunflower()

export const plantSeeds = (plan) => {
    for (let index = 0; index < plan.length; index++) {
        for (let j = 0; j < plan[index].length; j++) {
            if (plan[index][j] === "Asparagus") {
                addPlant(asparagusSeed)
            }
            else if (plan[index][j] === "Corn") {
                addPlant(cornSeed)
            }
            else if (plan[index][j] === "Potato") {
                addPlant(potatoSeed)
            }
            else if (plan[index][j] === "Soybean") {
                addPlant(soybeanSeed)
            }
            else if (plan[index][j] === "Wheat") {
                addPlant(wheatSeed)
            }
            else {
                addPlant(sunflowerSeed)
            }
        }
    }
}


// How do I push these elements into the growingPlants
// array from the field module without exporting it?