let image1=document.querySelector('#image1')
let image2=document.querySelector('#image2')
let image3=document.querySelector('#image3')
let image14=document.querySelector('#image14')


const product1 = {
    img1:" Assets/im4.jpg",
    name1: "Natural Extracted Edible Oil",
    price1: "$26.00"
};

const product2 = {
    img2:" Assets/im1.jpg",
    name2: "Assorted Coffee",
    price2: "$35.00"
};

const product3 = {
  img3:" Assets/im2.jpg",
  name3: "Hand Sanitizer",
  price3: "$50.00"
};


const product14 = {
    img14:" Assets/im3.jpg",
    name14: "Red Chillies",
    price14: "$65.00"
  };



  image1.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product1", JSON.stringify(product1));
  })
  
  image2.addEventListener('click',()=>{
      window.location.href='item.html'
      localStorage.clear();
      localStorage.setItem("product2", JSON.stringify(product2));
    })
  
    image3.addEventListener('click',()=>{
      window.location.href='item.html'
      localStorage.clear();
      localStorage.setItem("product3", JSON.stringify(product3));
    })

    image14.addEventListener('click',()=>{
        window.location.href='item.html'
        localStorage.clear();
        localStorage.setItem("product14", JSON.stringify(product14));
      })