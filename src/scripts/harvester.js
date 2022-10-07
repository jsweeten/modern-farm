let outputArray = []

export const harvestPlants = (plantsArray) => {
    for (let plant of plantsArray) {
        if (plant.type === "Corn") {
            let cornOutput = (plant.output) / 2
            for (let i = 0; i < cornOutput; i++) {
                outputArray.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++) {
                outputArray.push(plant)
            }
        }
    }
    return outputArray
}