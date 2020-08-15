import { useReducer, useCallback} from 'react'

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'RESET_INPUT':
      return {
        ...state,
        ...action.initialForm
      }
    default:
      throw new Error("Unhandled Error")
  }
}

function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm)


  const onChange = useCallback(e => {
      dispatch({
        type: "CHANGE_INPUT",
        name: e.target.name,
        value: e.target.value
      }) 
  }, [])

  const reset = useCallback(() => {
    dispatch({
      type: "RESET_INPUT",
      initialForm
    })
  }, [initialForm])

  return [state, onChange, reset]
}

export default useInputs