
export const ADD_ONE = "ADD_ONE"
export const addOne = () => {
    return({type:ADD_ONE})
}

export const APPLY_NUMBER = "APPLY_NUMBER"
export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number})
}

export const CHANGE_OPERATION = "CHANGE_OPERATION"
export const change_operation = () => {
    return ({type: CHANGE_OPERATIONs})
}