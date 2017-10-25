export const USER_LOGIN = 'AOR/USER_LOGIN';
export const USER_LOGIN_LOADING = 'AOR/USER_LOGIN_LOADING';
export const USER_LOGIN_FAILURE = 'AOR/USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'AOR/USER_LOGIN_SUCCESS';

export const USER_SIGNUP = 'AOR/USER_SIGNUP';
export const USER_SIGNUP_LOADING = 'AOR/USER_SIGNUP_LOADING';
export const USER_SIGNUP_FAILURE = 'AOR/USER_SIGNUP_FAILURE';
export const USER_SIGNUP_SUCCESS = 'AOR/USER_SIGNUP_SUCCESS';

export const userSignup = (payload, pathName) => ({
    type: USER_SIGNUP,
    payload,
    meta: { auth: true, pathName },
});

export const userLogin = (payload, pathName) => ({
    type: USER_LOGIN,
    payload,
    meta: { auth: true, pathName },
});

export const USER_CHECK = 'AOR/USER_CHECK';

export const userCheck = (payload, pathName) => ({
    type: USER_CHECK,
    payload,
    meta: { auth: true, pathName },
});

export const USER_LOGOUT = 'AOR/USER_LOGOUT';

export const userLogout = () => ({
    type: USER_LOGOUT,
    meta: { auth: true },
});
