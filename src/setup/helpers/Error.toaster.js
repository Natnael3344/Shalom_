// @flow

import { AlertHelper } from '../helpers/AlertHelper';

export const ErrorToaster = (message, description) => {
   
    let msg     =   '';

    if(typeof message != 'undefined' && typeof description === 'undefined')
    {
        msg =   message;
    }
    else if(typeof message === 'undefined' && typeof description != 'undefined')
    {
        msg =   description;
    }
    else if(typeof message != 'undefined' && typeof description != 'undefined')
    {
        msg =   description;
    }

    AlertHelper.show('error', '', msg)
}
