import {rootEpic} from "../epics";
import {rootReducer} from "../reducers";
import {createStore , applyMiddleware , compose} from "redux";
import {createEpicMiddleware} from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );
epicMiddleware.run(rootEpic);

