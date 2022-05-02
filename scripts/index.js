
const indicator = document.querySelector('#indicator')
document.addEventListener('click',e =>{
    let anchor ;

    if(e.target.matches('a')){
        anchor = e.target
    }
    else{
        anchor = e.target.closest('a')
    }
    
   console.log(anchor);
   if(anchor !== null){
       let allAnchors = [... document.querySelectorAll('a')]
       console.log(allAnchors.indexOf(anchor));
       const index = allAnchors.indexOf(anchor);
       document.querySelectorAll('a').forEach(elem =>{
           elem.classList.remove('active')
       })
       anchor.classList.add('active')
       indicator.style.setProperty('--left-position', index * 6 + 'rem')
   }
})