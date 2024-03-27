export const routes = {
    dashboard(){ 
        return "/dashboard"
    },
    playlist(){
        const dashboard = this.dashboard() 
        return dashboard+"/playlist"
    },
    search(recommend){
        const dashboard = this.dashboard() 
        return dashboard+"/search?q="+recommend
    },
    
}