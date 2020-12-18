(function(){
function activar (quien:string, 
       momento?:string,
    objeto:string='batiseñal', ){
        if(momento){
    console.log(`${quien} activó la ${objeto} por la ${momento}`);
        }
        else{    console.log(`${quien} activó la ${objeto}`) }
}
activar('Gordon');
activar('Gordon', 'tarde');
activar('Gordon', 'mañana ','contraria');
    })();