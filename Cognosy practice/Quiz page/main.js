const imagedisplay = document.querySelector('.imageDisplayer')
const nextBtn = document.querySelector('#next')
const images = document.querySelector('.images')
const allImages = [
    noni = [
        ['Leaves for cognosy/Noni_fruit_(Morinda_citrifolia).jpg']
    ],
    averrhoa =[ 
        ['Leaves for cognosy/Averrhoa carambola.jpg'],
        ['Leaves for cognosy/Averrhoa carambola1.jpg']
    ],
    cinammon = [
        ['Leaves for cognosy/Cinnamomum zeylanicum dry leaves.jpg'],
        ['Leaves for cognosy/Cinnamomum zeylanicum.jpg'],
        ['Leaves for cognosy/Cinnamomum zeylanicum1.jpg'],
        ['Leaves for cognosy/Cinnamomum zeylanicum2.jpg']
    ],
    LemonGrass = [
        ['Leaves for cognosy/Cymbopogon citratus.jpeg']
    ],
    Habiscus = [
        ['Leaves for cognosy/Habiscus Sabdarifa fresh leaves.webp'],
        ['Leaves for cognosy/Habiscus Sabdariffa fresh flowers 1.webp'],
        ['Leaves for cognosy/Habiscus Sabdariffa fresh flowers.webp'],
        ['Leaves for cognosy/Habiscus Sabdarifa dry.webp']
    ],
    cotton = [
        ['Leaves for cognosy/Gossypium arboreum flowers.webp'],
        ['Leaves for cognosy/Gossypium arboreum leaves.webp']
    ],
    cassiaAlata= [
        ['Leaves for cognosy/Cassia alata bush -C.jpg'],
        ['Leaves for cognosy/Cassia alata leaves.jpg']
    ],
    cassiaOccidentalis = [
        ['Leaves for cognosy/Cassia occidentalis.jpg'],
        ['Leaves for cognosy/Cassia occidentalis leaves.jpg']
    ] 
] 

used = []
function displayImage(){
    const indexForGeneral = Math.floor(Math.random() * allImages.length);
    const indexForSpecific =  Math.floor(Math.random() * allImages[indexForGeneral].length)
    let generalSelected = allImages[indexForGeneral]
    // console.log(generalSelected[indexForSpecific])
    let newImage = `<img src="${generalSelected[indexForGeneral,indexForSpecific]}" alt=""></img>`
    imagedisplay.innerHTML = newImage
    used.push(indexForGeneral,indexForSpecific)
    console.log(used)
}


displayImage()
nextBtn.addEventListener('click', displayImage)

