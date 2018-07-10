import axios from 'axios';
import {
    Alert
} from 'react-native';
import {
    REQUEST_HEADER_CONTENT_TYPE,
    REQUEST_HEADER_JSON,
    REQUEST_TYPE_POST,
    REQUEST_TYPE_GET
} from '../config';

// This file contains all the helper methods required.

/**
 ** Handles all the server communication
 * ? fine tuning pending.
 * @param requestType Specify which type of request is  POST or GET
 * @param url this specify which API to hit
 * @param requestHeader this specify request header type
 * @param responseHandler this specify how to handle the response.
 */
export const serverCommunication = (requestType, url, params, responseSuccessHandler, responseFailureHandler, dispatch, accessToken) => {
    log('------------- Inside serverCommunication ---------------------');
    if (requestType === REQUEST_TYPE_POST) {
        log('------------- Post request Params ---------------------');
        log(params);

        headers = {
            'headers': {
                "content-type": "application/json"
            }
        };
        if (accessToken) {
            headers = {
                'headers': {
                    "content-type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                }
            };
        }

        log('__HEADER__', headers);
        axios.post(url, params, headers)
            .then((response) => {
                log('calling responseSuccessHandler', response);
                responseSuccessHandler(dispatch, response.data);
            })
            .catch((error) => {
                responseFailureHandler(dispatch, error);
            });
    } else {
        log('------------- GET request ---------------------');
        axios.get(url)
            .then((response) => {
                log('------------- Inside then of GET request ---------------------');
                responseSuccessHandler(dispatch, response.data);
            })
            .catch((errors) => {
                responseFailureHandler(dispatch, error);
            });
    }
};

/**
 * Prints to console if in debug mode
 * @param {*} input input value to print in console
 */
export const log = (...input) => {
    if (__DEV__) {
        console.log("LOG :: ", ...input);
    }
};

/**
 * 
 * show alert 
 * 
 * @param  title 
 * @param  msg  
 * @param  negativeButtonText   
 * @param  onCancelListener 
 * @param  positiveButtonText 
 * @param  onOkListener 
 * @param  isCancelable 
 */
export const showAlert = (title, msg, negativeButtonText, onCancelListener, positiveButtonText, onOkListener, isCancelable) => {

    Alert.alert(
        title,
        msg, [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')}, 
            {
                text: negativeButtonText,
                onPress: () => onCancelListener,
                style: 'cancel'
            },
            {
                text: positiveButtonText,
                onPress: () => {
                    onOkListener()
                }
            },
        ], {
            cancelable: isCancelable
        }
    );
}

/**
 * This method generates unique key 
 * @param {*} prepend 
 */
export const generateKey = (prepend) => {
    var preprocess=`${prepend}_${guid()}`;
    return preprocess;
};

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  
function s4() {
return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}