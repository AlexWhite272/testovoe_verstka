//переход к 2 макету

const content = document.querySelector('.content')
const checkbox = document.querySelector('.checkbox')
const addMore = document.querySelector('.menu__addProducts')
const backOne = document.querySelector('.back1')

addMore.addEventListener('click', ()=>{
    content.style.display = 'none'
    // content.style.transition = '3s'
    checkbox.style.display = 'block'
})

// backOne.addEventListener('click', ()=>{
//     content.style.display = 'block'
//     checkbox.style.display = 'none'
// })
//-------------------------------------------------------

//переход к списку по клику
const prOne = document.querySelector('#prOne')
const prTwo = document.querySelector('#prTwo')
const prThree = document.querySelector('#prThree')
const prFour = document.querySelector('#prFour')
const prFive = document.querySelector('#prFive')
let radio = document.querySelectorAll("input[type='radio']")
const chekButton = document.querySelector('.checkbox__button')
const formButton = document.querySelector('.form__button')
const warning = document.querySelector('.warning')
const menu = document.querySelector('.menu')
const scrolBlock = document.querySelector('.product__scroll')
var values = 0;

chekButton.addEventListener('click', ()=>{
for (let rad of radio){
    if(rad.checked){
        if(rad.value == '5'){
            prTwo.style.display = 'block';
            prThree.style.display = 'block';
            prFour.style.display = 'block';
            prFive.style.display = 'block';
            formButton.innerHTML  = 'Submit and Pay 80 USD'
            values = rad.value
        
        }
        if(rad.value == '4'){
            prTwo.style.display = 'block';
            prThree.style.display = 'block';
            prFour.style.display = 'block';
            formButton.innerHTML = 'Submit and Pay 72 USD'
            values = rad.value
        
        }
        if(rad.value == '3'){
            prTwo.style.display = 'block';
            prThree.style.display = 'block';
            formButton.innerHTML =  'Submit and Pay 60 USD'
            values = rad.value
        
        }
        if(rad.value == '2'){
            prTwo.style.display = 'block';
            formButton.innerHTML = 'Submit and Pay 44 USD';
            values = rad.value
        
        }
        if(rad.value == '1'){
            formButton.innerHTML = 'Submit and Pay 24.99 USD'
            values = rad.value
        }
        
    }
    
}
checkbox.style.display = 'none';
content.style.display = 'block';
warning.style.display = 'none'
menu.style.display = 'none'
scrolBlock.style.height = "400px"
});

//-------------------------------------------------------

//удаление продукта с помощью крестика

//Была делема... Из-за отсутствия точного ТЗ, не мог понять как правильно реализовать закрытие(как будет выглядеть после)


const closePrTwo = document.querySelector('#pr2');
const closePrThree = document.querySelector('#pr3');
const closePrFour = document.querySelector('#pr4');
const closePrFive = document.querySelector('#pr5');
const closePr= document.querySelector('.product__titleImg')
const pr = document.querySelector('.product')
const prCon = document.getElementsByClassName('product__content');




const delProduct = ()=>{
    let sch=0;
    for (let elem of prCon){
        if(elem.getAttribute('style') == 'display: block;'){
            sch+=1;
        }
    }
    if(sch == 1){
        prTwo.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 24.99 USD'
    }
    if(sch == 2){
        prThree.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 44 USD';
    }
    if(sch == 3){
        prFour.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 66 USD';
    }
    if(sch == 4){
        prFive.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 72 USD'
    }
    
    console.log(sch)
 }

closePrTwo.addEventListener('click', ()=>{
    prTwo.style.display = 'none'
    let sch=0;
    for (let elem of prCon){
        if(elem.getAttribute('style') == 'display: block;'){
            sch+=1;
        }
    }

    if(sch == 0){
        // prTwo.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 24.99 USD'
    }
    if(sch == 1){
        // prThree.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 44 USD';
    }
    if(sch == 2){
        // prFour.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 66 USD';
    }
    if(sch == 3){
        // prFive.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 72 USD'
    }
   
    
    console.log(sch)
})
closePrThree.addEventListener('click', ()=>{
    prThree.style.display = 'none'
    let sch=0;
    for (let elem of prCon){
        if(elem.getAttribute('style') == 'display: block;'){
            sch+=1;
        }
    }
    if(sch == 0){
        // prTwo.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 24.99 USD'
    }
    if(sch == 1){
        // prThree.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 44 USD';
    }
    if(sch == 2){
        // prFour.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 66 USD';
    }
    if(sch == 3){
        // prFive.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 72 USD'
    }
    
    console.log(sch)
})
closePrFour.addEventListener('click', ()=>{
    prFour.style.display = 'none'
    let sch=0;
    for (let elem of prCon){
        if(elem.getAttribute('style') == 'display: block;'){
            sch+=1;
        }
    }
    if(sch == 0){
        // prTwo.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 24.99 USD'
    }
    if(sch == 1){
        // prThree.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 44 USD';
    }
    if(sch == 2){
        // prFour.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 66 USD';
    }
    if(sch == 3){
        // prFive.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 72 USD'
    }
    
    console.log(sch)
})
closePrFive.addEventListener('click', ()=>{
    prFive.style.display = 'none'
    let sch=0;
    for (let elem of prCon){
        if(elem.getAttribute('style') == 'display: block;'){
            sch+=1;
        }
    }
    if(sch == 0){
        // prTwo.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 24.99 USD'
    }
    if(sch == 1){
        // prThree.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 44 USD';
    }
    if(sch == 2){
        // prFour.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 66 USD';
    }
    if(sch == 3){
        // prFive.style.display = 'none'
        formButton.innerHTML = 'Submit and Pay 72 USD'
    }
    
    console.log(sch)
})

//------------------------------------------------------

//анимация после клика и отправка на сервер
const formButtonAnim = document.querySelector('.form__button_anim')
const failBut = document.querySelector('.fail__button')
const compBut = document.querySelector('.comp__button')
const fail = document.querySelector('.fail')
const comp = document.querySelector('.comp')

const form = document.querySelector('#email')
const formOne = document.querySelector('#productOne')
const formTwo = document.querySelector('#productTwo')
const formThree = document.querySelector('#productThree')
const formFour = document.querySelector('#productFour')
const formFive = document.querySelector('#productFive')






// const back = ()=>{
//     comp.style.display = "none"
//     fail.style.display = 'none'
//     content.style.display = "block"
//     formButtonAnim.style.display = 'none'
//     formButton.style.display = 'block'
//     closePrOne.style.display = 'block'
// }

// failBut.addEventListener('click', back)
// compBut.addEventListener('click', back)

const email = form.querySelector('[name="email"]')
const name1 = formOne.querySelector('[name="prName"]')
const url1 = formOne.querySelector('[name="prUrl"]')
const name2 = formTwo.querySelector('[name="prName"]')
const url2 = formTwo.querySelector('[name="prUrl"]')
const name3 = formThree.querySelector('[name="prName"]')
const url3 = formThree.querySelector('[name="prUrl"]')
const name4 = formFour.querySelector('[name="prName"]')
const url4 = formFour.querySelector('[name="prUrl"]')
const name5 = formFive.querySelector('[name="prName"]')
const url5 = formFive.querySelector('[name="prUrl"]')

function getFormValue(){
    event.preventDefault();


    // console.log(email.value)
    const data = {
        email: email.value,
        pr1 : {
             nameProduct: name1.value,
             productUrl: url1.value,
         } ,
          pr2 : {
             nameProduct:  name2.value,
             productUrl: url2.value,
         } ,
         pr3 : {
            nameProduct: name3.value,
             productUrl: url3.value,
         } ,
        pr4 : {
             nameProduct: name4.value,
             productUrl: url4.value,
         } ,
        pr5 : {
             nameProduct: name5.value,
             productUrl: url5.value
        } ,
    }
    
    console.log(data)
}


        // const urlComplete = 'paymentsaccess';
        // const urlFaile = 'paymenterror';
        // const xhr = XMLHttpRequest;
        // const  sendRequest = (method, url)=> {
        //     return new Promise ( (resolve, reject) =>{
        //         xhr.open(method, url)
        //         xhr.responseType = 'json'
        //         xhr.sendRequestHeader ("content-Type", 'application/json')

        //         xhr.onload = () => {
        //             if(xhr.status >=400){
        //                 reject(xhr.response)
        //             }else{
        //                 resolve(xhr.response)
        //             }
        //         }
        //         xhr.oneerror = () => {
        //             reject(xhr.response)
        //         }
        //         xhr.send(JSON.stringify(data))
        //     })
        // }
        // sendRequest('GET', url)
        // .then( () =>{
        //      перейти на urlComplete
        //  })
        //  .catch((err) =>{
        //      console.log(err)
        //      перейти на urlFaile
        //  })

        formButton.addEventListener('click', ()=>{
            getFormValue()
            if(email.value == "" || name1.value == '' || url1.value == ''){
                return ;
            }else{
            formButton.style.display = 'none';
            formButtonAnim.style.display = 'block'
            setTimeout(()=>{
                content.style.display = 'none'
                let rand = Math.random();
                pr.style.display = 'none';
                if(rand>0.5){
                    fail.style.display = 'block'
                }else{
                    comp.style.display = "block"
                }
                
            },2000)
        }
        })