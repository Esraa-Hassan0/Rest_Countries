document.getElementById('darkmode').addEventListener('click',()=>{
   document.body.dataset.bsTheme =
   document.body.dataset.bsTheme=="light"?"dark":"light";
})

document.getElementById('back').addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/index.html";
})