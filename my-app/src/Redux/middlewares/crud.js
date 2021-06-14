import { actions } from "../action";

// export const setInitialStateInLocalStorage = ({ dispatch, getState }) => next => action => {

//     // if (action.type === 'SET_UPDATES_IN_LOCAL_STORAGE') {
//     if (!localStorage["tasksList"]) {
//         localStorage["tasksList"] = JSON.stringify([1, 2, 2]);
//     }

//     return next(action)
// }
// export const setTaskInLocalStorage = ({ dispatch, getState }) => next => action => {

//     if (action.payload)
//         localStorage[action.payload.index] = action.payload.val
//     localStorage.setItem("tasksList", JSON.stringify([1, 2, 2]))
//     dispatch(actions.updateTaskContent(localStorage.taskContent))

//     return next(action)
// }
// async function
export const loginUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'LOGIN_USER') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify(action.paylaod);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: body,
            redirect: 'follow'
        };

        return fetch("http://localhost:5000/loginUser", requestOptions)
            .then(response => response.json())
            .then(result=>dispatch(actions.setToken(result)))
            .catch(error => console.log('error', error));
    }
    return next(action);

}


export const registerUser = ({ dispatch, getState }) => next => action => {
    // debugger;
    // if (action.type === 'REGISTER_USER') {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify(action.paylaod);

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };


    //     // userId = getState().managerComponent.managerComponent.userId

    //     fetch("http://localhost:4200/createUser", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));

    // }
    return next(action);
}

export const getAllUsers = ({ dispatch, getState }) => next => action => {
    debugger;
    if (action.type === 'GET_ALL_USERS') {
        alert("hi!");
        // var body = "";
        var requestOptions = {
            method: 'GET',
            // body: body,
            redirect: 'follow'
        };

        return fetch("http://localhost:4200/getAllUsers", requestOptions)
            .then(response => response.json())
            .then(result => {
                dispatch(actions.setUsers(result))
            })
            .catch(error => console.log('error', error));
    }
    return next(action)
}