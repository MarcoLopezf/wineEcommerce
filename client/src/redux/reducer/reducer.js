
import {GET_WINES, GET_NAME, SET_WINES_CLEAN, SET_FILTER,POST_WINE,GET_CATEGORIES} from '../actions/actions';


const initialState = {
    wines: {},
    allProducers: [],
    category: '',
    orden: '',

    strain: '',
    categories: [],

    
}

const rootReducer = (state = initialState, action) => {
    switch (
        action.type
    ){
        case GET_WINES:
          return{
            ...state,
            wines: action.payload,
        }   
        
        case SET_WINES_CLEAN:
            return{
              ...state,
              wines: {}
          }   

        case GET_NAME:
            return {
                ...state,
                wines: action.payload  
            }

        case SET_FILTER:
            return {
                ...state,
                category: action.payload.category,
                orden: action.payload.orden,
                producer: action.payload.producer,
            }

        case GET_STRAIN:
            return {
                ...state,
                allProducers: action.payload, 
            }
        case POST_WINE:
            return {
                ...state,
            }
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
            }

        default: return {...state}
    }
}

export default rootReducer;