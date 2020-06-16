import {allTypes} from "../actions/allTypes";

const innitalState = {
    isLoading : false,
    isFail : false,

}

export function UserReducer(state = innitalState , action){
    switch (action.type) {

        case allTypes.loading:
            return {...state , isLoading: true}
        case allTypes.fail:
            return {...state , isFail: true}
        default: return {...state}
    }

}