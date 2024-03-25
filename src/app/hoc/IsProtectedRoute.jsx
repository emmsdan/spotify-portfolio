import React from 'react'
import { isUserLogin } from '../../utils/user';

export const IsProtectedRoute = ({ children }) => {
    const user = isUserLogin()
    // make an api with user id.
    if (user) {
        return children;
    }
    window.location.href = '/login'
    return null
}