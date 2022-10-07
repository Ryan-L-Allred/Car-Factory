const createWoodBlock = () => {
    return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
}

const createBeautifulCarving = (woodObject) => {
    const woodObjectString = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved 
into a wooden ${woodObject.purpose}.`
    return woodObjectString
}       

const woodBlock = createWoodBlock()
const woodString = createBeautifulCarving(woodBlock)
console.log(woodString)