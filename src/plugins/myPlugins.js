let myPlugins = {}

myPlugins.install = function(vue,options){
    // console.log(vue)
    vue.directive(options.name,(element,params)=>{
        element.innerHTML = params.value.toUpperCase()
        // console.log(params)
    })
}

export default myPlugins