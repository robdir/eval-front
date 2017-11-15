import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loading'
export const GRABBED_BATCHES = 'GRABBED_BATCHES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    dispatch(loading(true))

    api.get('/batches')
      .then(res => {
        dispatch(loading(false))
        dispatch({ type: GRABBED_BATCHES, payload: res.body })
      })
      .catch(err => {
        console.error(err)
        dispatch(loading(false))
        dispatch(loadError(err))
      })
  }
}
