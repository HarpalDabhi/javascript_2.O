let promise_ = new Promise(function(hoga,nahi_hoga){
    hoga();
    nahi_hoga();
});

promise_.then(function(){
    console.log("Hello")
    // console.log(hello);
})