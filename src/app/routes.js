export const routes = {
    dashboard(){ 
        return "/dashboard"
    },
    playlist(){
        const dashboard = this.dashboard() 
        return dashboard+"/playlist"
    },
}