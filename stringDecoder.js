let decoder = code => {
    let wordDecoded = ''
    let numArray = [0,1,2,3,4,5,6,7,8,9]
    for(let i = 0; i<code.length; i++){
        if(numArray.includes(parseInt(code.charAt(i)))){
            let num = parseInt(code.charAt(i))
            wordDecoded += code.slice((i + num + 1),(i + num + 2))
        }
    }
    console.log(wordDecoded)
}

decoder('0h2xce5ngbrdy') // outputs 'hey'
decoder('3vdfn') // outputs 'n'
decoder('0r') // outputs 'r'
decoder('2bna0p1mp2osl0e') // outputs 'apple'
decoder('0y4akjfe0s') // outputs 'yes'