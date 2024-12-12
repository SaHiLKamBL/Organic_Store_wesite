

let image1=document.querySelector('#image1')
let image2=document.querySelector('#image2')
let image3=document.querySelector('#image3')
let image4=document.querySelector('#image4')
let image5=document.querySelector('#image5')
let image6=document.querySelector('#image6')
let image7=document.querySelector('#image7')
let image8=document.querySelector('#image8')
let image9=document.querySelector('#image9')
let image10=document.querySelector('#image10')
let image11=document.querySelector('#image11')
let image22=document.querySelector('#image22')



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

const product4 = {
  img4:" Assets/cashew-butter-500-400x400.jpg",
  name4: "Cashew Butter",
  price4: "$65.00"
};

const product5 = {
  img5:" Assets/diabetic-cookies-400x400.jpg",
  name5: "Diabetic Cookies",
  price5: "$45.00"
};

const product6 = {
  img6:"Assets/eggs-400x400.jpg",
  name6: "Fram Fresh Eggs",
  price6: "$85.00"
};

const product7 = {
  img7:"Assets/orage-juice-kariz-400x400.jpg",
  name7: "Fresh Orange Juice",
  price7: "$95.00"
};

const product8 = {
  img8:"Assets/organic-honey-400x400.jpg",
  name8: "Fresh Organic Honey",
  price8: "$65.00"
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

const product11 = {
  img11:" Assets/im4.jpg",
  name11: "Natural Extracted Edible Oil",
  price11: "$26.00"
};

const product22 = {
  img22:" Assets/im1.jpg",
  name22: "Assorted Coffee",
  price22: "$35.00"
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

  image4.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product4", JSON.stringify(product4));
  })

  image5.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product5", JSON.stringify(product5));
  })

  image6.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product6", JSON.stringify(product6));
  })

  image7.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product7", JSON.stringify(product7));
  })
  image8.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product8", JSON.stringify(product8));
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
  image11.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product11", JSON.stringify(product11));
  })
  image22.addEventListener('click',()=>{
    window.location.href='item.html'
    localStorage.clear();
    localStorage.setItem("product22", JSON.stringify(product22));
  })
