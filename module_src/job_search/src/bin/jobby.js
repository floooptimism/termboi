export default (function (){
    const api_url = "http://127.0.0.1:9000";


    return function(System, args){
        args = args.split(/\s*\s/g).filter(function(elem){return elem != ''});
    
        fetch(api_url)
            .then( response => response.json())
            .then( data => {
                console.log(data);
            })
    }
})()