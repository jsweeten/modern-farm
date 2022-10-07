let growingPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed) === true) {
        for (let cornObj of seed) {
            growingPlants.push(cornObj)
        }
    }
    else {
        growingPlants.push(seed)
    }
}

export const usePlants = () => {
    return growingPlants.map(plant => ({...plant}))
}