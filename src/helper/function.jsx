//Shorter
const shorter = title => {
    const split = title.split(" ");

    if (split[1].length > 2) {
        return `${split[0]} ${split[1]}`
    } else {
        return `${split[0]}`
    }
}

//Shorter Letters
const shorterLetters = letters => {
    const substring = letters.substring(0, 102);
    return `${substring} ...`
}

//is it there
const isItThere = (state, id) => {
    const result = (!!state.selectedItem.find(item => item.id === id));
    return result
}

//find quantity
const findQuantity = (state, id) => {
    const index = state.selectedItem.findIndex(item => item.id === id)
    if (index !== -1) {
        const quantity = state.selectedItem[ index ].quantity;
        return quantity
    }
}

export { shorter, shorterLetters, isItThere, findQuantity }