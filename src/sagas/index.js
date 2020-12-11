import { put, takeLatest, delay } from 'redux-saga/effects'

// when an action gets dispatched it gets caught in the saga

function* ageUpAsync() {
    // Debounce by 2000ms
    yield delay(2000)
    // put is the same as a redux dispatch() function 
    yield put({ type: 'AGE_UP_ASYNC', value: 1 })
}

// Generator function to watch for ageUp action
export function* watchAgeUP() {
    // Yield observes this action
    // takeEvery means to observe every action that gets dispatched
    // Once its caught, it needs to run another function -> ageUpAsync
    yield takeLatest('AGE_UP', ageUpAsync)
}