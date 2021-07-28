import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

const activityReducer = (state, action) => {
    switch (action.type) {
        case "errorMessage":
            return {...state, error: action.payload };
        case "message":
            return {...state, message: action.payload };
        default:
            return state;
    }
};

const ActivitysRef = firebase.firestore().collection("Actividad");

const createActivity = (dispatch) => (title, description, date, timestamp, user) => {
    const data = {
        title,
        description,
        date,
        timestamp,
        userId: user,
    };

    ActivitysRef
        .add(data)
        .then((_doc) => {
            dispatch({ type: "message", payload: "Actividad Creada Correctamente!" });
        })
        .catch((error) => {
            dispatch({ type: "errorMessage", payload: error.message });
        });
};

export const { Provider, Context } = createDataContext(
    activityReducer, {
        createActivity,
    }, {
        errorMessage: null,
    }
);