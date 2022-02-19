const open_btn = document.querySelector('.faqs__ul-btn');
const faqs_desc = document.querySelector('.faqs__ul-desc');

open_btn.addEventListener('click', ()=>{
    faqs_desc.classList.toggle('faqs__ul-desc')
})


