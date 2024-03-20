import React from "react";

export const getCurrentHash = () => {
    return window.location.hash.replace('#/', '').replace('#', '')
}

export const navigate = (path) => {
    window.location.hash = '#/'+path
}

export const useNavigation = () => {
    const [url, setState] = React.useState(getCurrentHash())
    window.addEventListener('hashchange', function (e) {
        const path = getCurrentHash()
        setState(path)
    });
    return {url, navigate}
}
