const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto4o1y/",
            name: "springbooto4o1y",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto4o1y/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "健美操评分系统"
        } 
    }
}
export default base
