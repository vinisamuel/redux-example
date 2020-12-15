import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

// * = async
// yield = await
export default function* rootSaga() {
    return yield all([
        cart,
    ]);
}