import ApiClient from '../../api/client'

import {
    APP_LOADING,
    APP_DONE_LOADING,
    LOAD_ERROR,
    LOAD_SUCCESS
} from '../loading'

import { push } from 'react-router-redux'

export const DELETE_BATCH = 'DELETE_BATCH'

const api = new ApiClient()

export const deleteBatch = (batch) => {
    return dispatch => {
        dispatch({ type: APP_LOADING })
        api.delete(`/${batch._id}`)
            .then((res) => {
                dispatch({ type: APP_DONE_LOADING })
                dispatch({ type: LOAD_SUCCESS })
                dispatch(push(`/`))

            })
            .catch((error) => {
                dispatch({ type: APP_DONE_LOADING })
                dispatch({
                    type: LOAD_ERROR,
                    payload: error.message
                })
            })
    }
}