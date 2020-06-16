import {allTypes} from "../actions/allTypes";
import {catchError, delay, map, mergeMap,} from "rxjs/operators"
import {ajax} from "rxjs/ajax";
import {ofType} from "redux-observable";

// export const fetchDataEpic = action$ => action$.pipe(
//     ofType(allTypes.fetchData),
//     mergeMap(action => {
//             return ajax.getJSON(`api`).pipe(
//                 delay(800),
//                 map(response => {
//                     console.log("fetch success");
//                     return fetchdataSuccess(response)
//                 }),
//                 catchError(error => {
//                     console.log('error: ', error);
//                     return fetchdataFail(error.response);
//                 })
//             )
//         }
//     )
// )

