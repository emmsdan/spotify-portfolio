export const logout = () => {
    localStorage.removeItem('user')
}

export const isUserLogin =()=>{
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    return user.email && user.token
}

export const appSettings = () => {
    return JSON.parse(localStorage.getItem('app-settings') || '{}')
}

export const downloadApp = () => {
    const con = window.confirm('Have you download the app')
    if (con) {
        const app = appSettings()
        localStorage.setItem('app-settings', JSON.stringify({
            ...appSettings,
            hasInstalledApp: true,
        }))
        window.location.reload()
    }
}