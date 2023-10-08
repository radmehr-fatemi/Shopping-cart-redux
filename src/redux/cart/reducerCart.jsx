const initialState = {
    selectedItem: [],
    itemCounter: 0,
    total: 0,
    checkout: false,
}

const calculatorItem = selectedItem => {
    const itemCounter = selectedItem.reduce( (acc ,cur) => acc + cur.quantity ,0 )
    const total = selectedItem.reduce( (acc ,cur) => acc + cur.price * itemCounter ,0 )
    return { itemCounter ,total }
}

const reducerCart = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {

        case 'ADD_ITEM':
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItem: [...state.selectedItem],
                checkout : false,
                 ...calculatorItem( state.selectedItem )  
            }

        case 'INCREASE':
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[ indexI ].quantity++
            return {
                ...state,
                selectedItem : [ ...state.selectedItem ],
                checkout : false,
                ...calculatorItem( state.selectedItem )  
            }

        case 'DECREASE':
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[ indexD ].quantity--
            return {
                ...state,
                selectedItem : [ ...state.selectedItem ],
                checkout : false,
                ...calculatorItem( state.selectedItem )  
            }

        case 'REMOVE_ITEM':
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItem : [ ...newSelectedItem ],
                checkout : false,
                ...calculatorItem( newSelectedItem ),
            }

        case 'CHECKOUT':
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: true,
            }

        case 'CLEAR':
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: false,
            }

        default:
            return state
    }
}

export default reducerCart;