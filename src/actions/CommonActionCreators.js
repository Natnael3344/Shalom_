// @ flow

import React from 'react';

export const CommonActionsCreator = {
    fetching,
    success,
    error
};

/* ---- Actions Creator ---- */

function fetching(actionType) {
    return ({
        type: actionType
    })
}

function success(actionType, actionData) {
    return ({
        type: actionType,
        data: actionData
    })
}


function error(actionType, actionData) {
    return ({
        type: actionType,
        data: actionData
    })
}

/* ---- Actions Creator ---- */