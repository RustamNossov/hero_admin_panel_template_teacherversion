const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        // Самая сложная часть - это показывать новые элементы по фильтрам
        // при создании или удалении
        case 'HERO_CREATED':
            // Формируем новый массив    
            return {
                ...state,
                heroes:  [...state.heroes, action.payload],
            }
        case 'HERO_DELETED': 
            // Формируем новый массив
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
                // Фильтруем новые данные по фильтру, который сейчас применяется
            }
        default: return state
    }
}

export default heroes;