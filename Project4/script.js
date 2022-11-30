(function(){
    const shoesimg=document.querySelector('#shoes-img')
    const shoesName=document.querySelector('#shoes-name')
    const shoesText=document.querySelector('#shoes-text')
    const btn=document.querySelectorAll('.btn')
    let index=0
    const shoes=[]
    function Shoes(img,name,text)
    {
        this.img=img
        this.name=name
        this.text=text
    }
    function createShoes(img,name,text)
    {
        let Img=`img/${img}.jpg`
        let shoe=new Shoes(Img,name,text)
        shoes.push(shoe)
    }  
    createShoes(0,'Adidas Shoe Black-White',"The best shoes in the world ")
    createShoes(1,'Adidas Shoe White-Blue',"The second best shoes in the world")
    createShoes(2,'Adidas Shoe White-Black',"The third best shoes in the world ")

    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('prevBtn'))
            {
                if(index===0)
                {
                    index=shoes.length
                }
                index--
                shoesimg.src=shoes[index].img
                shoesName.textContent=shoes[index].name
                shoesText.textContent=shoes[index].text

            }
            if(e.target.parentElement.classList.contains('nextBtn'))
            {
                index++
                if(index===shoes.length)
                {
                    index=0
                }
                shoesimg.src=shoes[index].img
                shoesName.textContent=shoes[index].name
                shoesText.textContent=shoes[index].text

            }
        })
    })
})()