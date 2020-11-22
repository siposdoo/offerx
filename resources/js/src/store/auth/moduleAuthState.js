/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


 
export default {
  isUserLoggedIn: () => {
    let isAuthenticated = false

    // get firebase current user
    const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')) 

    if (userInfoLocalStorage) isAuthenticated = true
    else isAuthenticated = false

    return localStorage.getItem('userInfo') && isAuthenticated
  }
}
