import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

export function* watcherSaga() {
	yield takeLatest('API_CALL_REQUEST', workerSaga)
}

function* workerSaga() {
	try 
		const response = yield call(fetchDog);
		const tiger = response.data.message 
		yield put ({ type: 'API_CALL_SUCCESS', tiger })
	} catch(error) {
		yield put ({ type: 'API_CALL_FAILURE', error})
	}
}



function fetchsDog() {

	return axios({ 
		method: "GET",
		url: "https://dog.ceo/api/breeds/image/random"
	})
}
