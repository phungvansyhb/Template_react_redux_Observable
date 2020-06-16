import {fetchDataEpic, fetchLocationEpic} from "./fetchDataEpic";
import {combineEpics} from "redux-observable";


export const rootEpic = combineEpics(
        fetchDataEpic ,
        fetchLocationEpic,

)