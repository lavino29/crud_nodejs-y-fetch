const email = document.querySelector('.email')
const btn = document.querySelector('.btn')
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i 

/* EN CONSTRUCCION EXPRESIONES REGULARES Y VALIDACION DE FORMULARIO */ 
btn.addEventListener('click',e=>{
   // e.preventDefault()
})
email.addEventListener('change', e=>{
if(emailRegex.test(e.target.value)){
    console.log('ok')
}

})