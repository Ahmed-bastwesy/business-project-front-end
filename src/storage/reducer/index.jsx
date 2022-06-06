import tokenReducers from './tokenReducer'
import userReducers from './userReducer'
import cartProduct from './product/cartProduct'

const reducers = {
    user: userReducers,
    token: tokenReducers,
    cartProduct,
}

export default reducers