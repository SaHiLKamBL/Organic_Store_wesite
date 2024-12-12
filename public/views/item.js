

var itemname = document.querySelector('#itemname')
var itemprice = document.querySelector('#itemprice')
var itemimage = document.querySelector('#itemimage')



const storedProduct1 = localStorage.getItem("product1");
const storedProduct2 = localStorage.getItem("product2");
const storedProduct3 = localStorage.getItem("product3");
const storedProduct4 = localStorage.getItem("product4");
const storedProduct5 = localStorage.getItem("product5");
const storedProduct6 = localStorage.getItem("product6");
const storedProduct7 = localStorage.getItem("product7");
const storedProduct8 = localStorage.getItem("product8");
const storedProduct9 = localStorage.getItem("product9");
const storedProduct10 = localStorage.getItem("product10");
const storedProduct11 = localStorage.getItem("product11");
const storedProduct22 = localStorage.getItem("product22");
const storedProduct13 = localStorage.getItem("product13");
const storedProduct14 = localStorage.getItem("product14");


const product1 = JSON.parse(storedProduct1);
const product2 = JSON.parse(storedProduct2);
const product3 = JSON.parse(storedProduct3);
const product4 = JSON.parse(storedProduct4);
const product5 = JSON.parse(storedProduct5);
const product6 = JSON.parse(storedProduct6);
const product7 = JSON.parse(storedProduct7);
const product8 = JSON.parse(storedProduct8);
const product9 = JSON.parse(storedProduct9);
const product10 = JSON.parse(storedProduct10);
const product11 = JSON.parse(storedProduct11);
const product22 = JSON.parse(storedProduct22);
const product13 = JSON.parse(storedProduct13);
const product14 = JSON.parse(storedProduct14);


if (storedProduct1) {

  itemname.innerHTML = product1.name1
  itemprice.innerHTML = product1.price1
  itemimage.innerHTML = `
          <img id="imagee"
              src=${product1.img1}
              alt="Hover to zoom"
              class="w-full h-full object-cover "
            />
          </div>

`

}
if (storedProduct2) {

  itemname.innerHTML = product2.name2
  itemprice.innerHTML = product2.price2
  itemimage.innerHTML = `
              <img id="imagee"
                  src=${product2.img2}
                  alt="Hover to zoom"
                  class="w-full h-full object-cover "
                />
              </div>
    
    `
}

if (storedProduct3) {

  itemname.innerHTML = product3.name3
  itemprice.innerHTML = product3.price3
  itemimage.innerHTML = `
                <img id="imagee"
                    src=${product3.img3}
                    alt="Hover to zoom"
                    class="w-full h-full object-cover "
                  />
                </div>
      
      `

}

if (storedProduct4) {

  itemname.innerHTML = product4.name4
  itemprice.innerHTML = product4.price4
  itemimage.innerHTML = `
                  <img id="imagee"
                      src=${product4.img4}
                      alt="Hover to zoom"
                      class="w-full h-full object-cover "
                    />
                  </div>
        
        `

}


if (storedProduct5) {

  itemname.innerHTML = product5.name5
  itemprice.innerHTML = product5.price5
  itemimage.innerHTML = `
                    <img id="imagee"
                        src=${product5.img5}
                        alt="Hover to zoom"
                        class="w-full h-full object-cover "
                      />
                    </div>
          
          `

}


if (storedProduct6) {

  itemname.innerHTML = product6.name6
  itemprice.innerHTML = product6.price6
  itemimage.innerHTML = `
                      <img id="imagee"
                          src=${product6.img6}
                          alt="Hover to zoom"
                          class="w-full h-full object-cover "
                        />
                      </div>
            
            `

}


if (storedProduct7) {

  itemname.innerHTML = product7.name7
  itemprice.innerHTML = product7.price7
  itemimage.innerHTML = `
                        <img id="imagee"
                            src=${product7.img7}
                            alt="Hover to zoom"
                            class="w-full h-full object-cover "
                          />
                        </div>
              
              `

}

if (storedProduct8) {

  itemname.innerHTML = product8.name8
  itemprice.innerHTML = product8.price8
  itemimage.innerHTML = `
                          <img id="imagee"
                              src=${product8.img8}
                              alt="Hover to zoom"
                              class="w-full h-full object-cover "
                            />
                          </div>
                
                `

}

if (storedProduct9) {

  itemname.innerHTML = product9.name9
  itemprice.innerHTML = product9.price9
  itemimage.innerHTML = `
                            <img id="imagee"
                                src=${product9.img9}
                                alt="Hover to zoom"
                                class="w-full h-full object-cover "
                              />
                            </div>
                  
                  `

}

if (storedProduct10) {

  itemname.innerHTML = product10.name10
  itemprice.innerHTML = product10.price10
  itemimage.innerHTML = `
                              <img id="imagee"
                                  src=${product10.img10}
                                  alt="Hover to zoom"
                                  class="w-full h-full object-cover "
                                />
                              </div>
                    
                    `

}

if (storedProduct11) {

  itemname.innerHTML = product11.name11
  itemprice.innerHTML = product11.price11
  itemimage.innerHTML = `
                                <img id="imagee"
                                    src=${product11.img11}
                                    alt="Hover to zoom"
                                    class="w-full h-full object-cover "
                                  />
                                </div>
                      
                      `

}


if (storedProduct22) {

  itemname.innerHTML = product22.name22
  itemprice.innerHTML = product22.price22
  itemimage.innerHTML = `
                                  <img id="imagee"
                                      src=${product22.img22}
                                      alt="Hover to zoom"
                                      class="w-full h-full object-cover "
                                    />
                                  </div>
                        
                        `

}

if (storedProduct13) {

  itemname.innerHTML = product13.name13
  itemprice.innerHTML = product13.price13
  itemimage.innerHTML = `
                                    <img id="imagee"
                                        src=${product13.img13}
                                        alt="Hover to zoom"
                                        class="w-full h-full object-cover "
                                      />
                                    </div>
                          
                          `

}


if (storedProduct14) {

  itemname.innerHTML = product14.name14
  itemprice.innerHTML = product14.price14
  itemimage.innerHTML = `
                                      <img id="imagee"
                                          src=${product14.img14}
                                          alt="Hover to zoom"
                                          class="w-full h-full object-cover "
                                        />
                                      </div>
                            
                            `

}



let add=document.querySelector('#add')
let sub=document.querySelector('#sub')
let cart=document.querySelector('#cart')
let itemnumber=document.querySelector('#itemnumber')

add.addEventListener('click',()=>{
   let val=Number(itemnumber.value)
   val=val+1
   itemnumber.value=val

})

sub.addEventListener('click',()=>{
  let val=Number(itemnumber.value)
  if(itemnumber.value >0){
  val=val-1
  itemnumber.value=val
  }
})

cart.addEventListener('click',()=>{
    alert("Item Added Successful")
})

