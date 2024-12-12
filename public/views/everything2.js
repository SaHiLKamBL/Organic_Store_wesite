let image1=document.querySelector('#image1')
let image2=document.querySelector('#image2')
let image3=document.querySelector('#image3')
let image13=document.querySelector('#image13')
let image9=document.querySelector('#image9')
let image10=document.querySelector('#image10')



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

const product13 = {
    img13:" Assets/face-wash-400x400.jpg",
    name13: "Organic Face Srub",
    price13: "$35.00"
  };
  const product9 = {
    img9:"Assets/pulses-400x400.jpg",
    name9: "Pulses From Organic Fram",
    price9: "$25.00"
  };
  
  const product10 = {
    img10:"Assets/wheat-400x400.jpg",
    name10: "Wheat From Organic Farm",
    price10: "$95.00"
  };



  image13.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product13", JSON.stringify(product13));
  })

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
    image9.addEventListener('click',()=>{
        window.location.href='item.html'
        localStorage.clear();
        localStorage.setItem("product9", JSON.stringify(product9));
      })
      image10.addEventListener('click',()=>{
        window.location.href='item.html'
        localStorage.clear();
        localStorage.setItem("product10", JSON.stringify(product10));
      })