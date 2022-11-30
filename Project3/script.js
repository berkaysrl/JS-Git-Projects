(function(){
const buttons=document.querySelectorAll('.btn');
const images=document.querySelectorAll('.store-item');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>
    {
        e.preventDefault();//For no refresh
        const filter=e.target.dataset.filter
        images.forEach((item)=>
        {
            console.log(filter);
            if(filter==='all')
            {
                item.style.display='block';
            }
            else
            {
                if(item.classList.contains(filter))
                {
                    console.log(item);
                    item.style.display='block';
                }
                else
                {
                    item.style.display='none';
                }
            }
        })
    })
})

})();