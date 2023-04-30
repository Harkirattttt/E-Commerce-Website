let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
} 

let ImgArr = document.getElementsByClassName("imagesContainer")
let phonesImgArr = ImgArr[0];
let laptopsImgArr = ImgArr[1];
let itemCard = document.getElementsByClassName("itemCard")
let count = 0;
let alertSuccess = document.getElementById('alertSuccess')
let popupp = document.getElementById('popupp')
    
function addSuccessAlert(){
  alertSuccess.style.display="block";
  setTimeout(alertRemover,5000);
}

function alertRemover()
{
  alertSuccess.style.display="none";
}

let productNames = {"OPPO Reno7 Pro": [" OPPO Reno7 Pro"," 34,900"," 12GB RAM / 256GB Storage / Starlight Black","mobiles","mobile1.png"],"Huawei Moto Edge 30": [" Huawei Moto Edge 30"," 36,999"," 8GB RAM / 128GB Storage / Starlight White","mobiles","mobile2.png"],"Vivo Y01": [" Vivo Y01"," 8,499"," 2GB RAM / 32GB Storage / Sapphire Blue","mobiles","mobile3.png"],"Realme Narzo 50 Pro 5G": [" Realme Narzo 50 Pro 5G"," 29,900"," 8GB RAM / 128GB Storage / Hyper Blue","mobiles","mobile5.png"],"OnePlus 8 Pro": [" OnePlus 8 Pro"," 36,999"," 8GB RAM / 128GB Storage / Glacial Green","mobiles","mobile4.png"],"TECNO SPARK 9T": [" TECNO SPARK 9T"," 7,769"," 4GB RAM / 64GB Storage / Sky Mirror","mobiles","mobile6.png"],"Lenovo Ideapad 3": [" Lenovo Ideapad 3"," 27,490","8GB RAM / 256GB Storage / Platinum Grey","laptops","laptop1.png"],"MSI Bravo 15": [" MSI Bravo 15"," 60,490","8GB RAM / 512GB Storage / Starlight Black","laptops","laptop2.png"],"ASUS Vivobook 15": [" ASUS Vivobook 15"," 26,999","8GB RAM / 256GB Storage / Silver","laptops","laptop3.png"],"Acer Aspire 7": [" Acer Aspire 7"," 54,990","8GB RAM / 512GB Storage / Stardust Black","laptops","laptop4.png"],"HP Pavilion": [" HP Pavilion"," 54,999","8GB RAM / 256GB Storage / Space Grey","laptops","laptop5.png"],"DELL Inspiron 15": [" DELL Inspiron 15"," 45,490","8GB RAM / 512GB Storage / Platinum Silver","laptops","laptop6.png"]};


Array.from(itemCard).forEach((element)=>{
  element.addEventListener('click',()=>{
    let itemCardText = element.getElementsByClassName('lines')[0].getElementsByTagName("p")[0].innerText
    popupp.innerHTML+=`
          <div class="popup">
          <center>
          <div class="popupContainer">
              <p style="font-weight: bolder;margin-bottom: 10px;width: 92%; font-size: larger;"><u>${itemCardText} </u><p style="cursor: pointer;"><b id="close1">X</b></p></p>
              <hr style="color: rgb(233, 233, 233);">
              <div class="infoContainer">
                  <img src="./images/${productNames[itemCardText][3]}/${productNames[itemCardText][4]}" alt="" style="width: 250px;">
                  <div class="infoTextContainer" style="text-align: left;">
                      <p><b>Model Name: </b>${productNames[itemCardText][0]}</p>
                      <br>
                      <p><b>Price: </b>Rs. ${productNames[itemCardText][1]}</p>
                      <br>
                      <p><b>Specifications: </b>${productNames[itemCardText][2]}</p>
                      <center>
                      <button class="buyNowBtn">Buy Now!</button>
                      </center>
                  </div>
              </div>
          </div>
          </center>
      </div>
    `
    if(popupp.innerHTML!="")
    {
      let close1 = document.getElementById('close1')
      close1.addEventListener('click',()=>{
        popupp.removeChild(popupp.firstElementChild)
      })
    }
    let buyNowBtn = document.getElementsByClassName('buyNowBtn')
    Array.from(buyNowBtn).forEach((element)=>{
      element.addEventListener('click',()=>{
        popupp.innerHTML=`<div class="popup">
        <center>
            <div class="popupContainer">
                <p style="font-weight: bolder;margin-bottom: 10px;width: 92%; font-size: larger;">Enter Your Card Details<p style="cursor: pointer;"><b id="close1">X</b></p></p>
                <hr style="color: rgb(233, 233, 233);">
                <div class="cardDetails">
                    <div><p>Enter Account Holder Name</p></div>
                    <div><input type="text" id="accountName"></div>
                    <div><p>Enter Card Number</p></div>
                    <div><input type="text" id="accountNumber"></div>
                    <div><p>Enter CVV</p></div>
                    <div><input type="text" id="accountCVV"></div>
                    <div><p>Enter Expiry Date</p></div>
                    <div><input type="text" id="accountExpiry"></div>
                </div>
  
                <div class="cardImgs">
                    <div><img src="./images/cards/visa.png" alt=""></div>
                    <div><img src="./images/cards/mastercard.jpg" alt=""></div>
                    <div><img src="./images/cards/amex.png" alt=""></div>
                </div>
                <button class="payNowBtn" id="payment">
                    Pay Now
                </button>
            </div>
  
        </center>
    </div>`
    let payNowBtn = document.getElementsByClassName('payNowBtn')
    close1=document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
    payNowBtn[0].addEventListener('click',function payBtnCheck(){

      // let accountName = document.getElementById('accountName').value
      // let accountNumber = document.getElementById('accountNumber').value
      // let accountExpiry = document.getElementById('accountExpiry').value
      // let accountCVV = document.getElementById('accountCVV').value

      // if(accountName=="")
      // {
      //   alert('Please enter your name!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false;
      // }
      // else if(accountNumber=="" || accountNumber.length!=16)
      // {
      //   alert('Please a valid card number!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false;
      // }
      // else if(accountExpiry=="" || accountExpiry.indexOf("/",0)<0)
      // {
      //   alert('Please enter a valid expiry date!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false;
      // }
      // else if(accountCVV=="" || accountCVV.length!=3)
      // {
      //   alert('Please a valid CVV!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false
      // }

      popupp.removeChild(popupp.firstElementChild)
      addSuccessAlert();
      return true;
    })
      })
    })
  })
})


let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',()=>{
  let count1 = 0;
  let searchText= document.getElementById('search').value;
  Array.from(itemCard).forEach((element)=>{
    let itemCardText = element.getElementsByClassName('lines')[0].getElementsByTagName("p")[0].innerText;

    if(itemCardText.includes(searchText) && count1==0)
    {
      popupp.innerHTML+=`
        <div class="popup">
          <center>
          <div class="popupContainer">
              <p style="cursor: pointer;width:90%;text-align:right;"><b id="close1">X</b></p>
              <div class="infoContainer">
                  <img src="./images/${productNames[itemCardText][3]}/${productNames[itemCardText][4]}" alt="" style="width: 250px;">
                  <div class="infoTextContainer" style="text-align: left;">
                      <p><b>Model Name: </b>${productNames[itemCardText][0]}</p>
                      <br>
                      <p><b>Price: </b>Rs. ${productNames[itemCardText][1]}</p>
                      <br>
                      <p><b>Specifications: </b>${productNames[itemCardText][2]}</p>
                      <center>
                      <button class="buyNowBtn">Buy Now!</button>
                      </center>
                  </div>
              </div>
          </div>
          </center>
        </div>
        `
      count1=count1+1;
      if(popupp.innerHTML!='')
      {
        let close1 = document.getElementById('close1')
        close1.addEventListener('click',()=>{
        popupp.removeChild(popupp.firstElementChild)
        })
      }

    }
    else if(itemCardText.includes(searchText) && count1!=0){
      let popupContainer = document.getElementsByClassName('popupContainer')[0]
      popupContainer.innerHTML+=`<div class="infoContainer">
      <img src="./images/${productNames[itemCardText][3]}/${productNames[itemCardText][4]}" alt="" style="width: 250px;">
      <div class="infoTextContainer" style="text-align: left;">
          <p><b>Model Name: </b>${productNames[itemCardText][0]}</p>
          <br>
          <p><b>Price: </b>Rs. ${productNames[itemCardText][1]}</p>
          <br>
          <p><b>Specifications: </b>${productNames[itemCardText][2]}</p>
          <center>
          <button class="buyNowBtn">Buy Now!</button>
          </center>
      </div>
  </div>`
  // let buyNowBtn = document.getElementsByClassName('buyNowBtn')
  // Array.from(buyNowBtn).forEach((element)=>{
  //   element.addEventListener('click',()=>{
  //     console.log(element)
  //     popupp.removeChild(popupp.firstElementChild)
  //     addSuccessAlert();
  //   })
  // })
    count1=count1+1;
    if(popupp.innerHTML!='')
    {

      let close1 = document.getElementById('close1')
      close1.addEventListener('click',()=>{
        popupp.removeChild(popupp.firstElementChild)
      })
    }

    }
  })
  if(count1==0)
  {
    let popupp=document.getElementById('popupp')
    popupp.innerHTML=`
    <div class="popup">
    <center>
    <div class="popupContainer">
        <p style="cursor: pointer;width:90%;text-align:right;"><b id="close1">X</b></p>
        <p style="font-weight:bolder;margin-bottom:20px;">0 results found!</p>
    </div>
    </center>
    </div>
    `
    let close1 = document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
  }
  else{
    let popupContainer = document.getElementsByClassName('popupContainer')[0]
    popupContainer.innerHTML+=`<p style="font-weight:bolder;margin-top:20px;">${count1} result(s) found!</p>`
    let close1 = document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
    let buyNowBtn = document.getElementsByClassName('buyNowBtn')
    Array.from(buyNowBtn).forEach((element)=>{
      element.addEventListener('click',()=>{
        popupp.innerHTML=`<div class="popup">
        <center>
            <div class="popupContainer">
                <p style="font-weight: bolder;margin-bottom: 10px;width: 92%; font-size: larger;">Enter Your Card Details<p style="cursor: pointer;"><b id="close1">X</b></p></p>
                <hr style="color: rgb(233, 233, 233);">
                <div class="cardDetails">
                    <div><p>Enter Account Holder Name</p></div>
                    <div><input type="text" id="accountName"></div>
                    <div><p>Enter Card Number</p></div>
                    <div><input type="text" id="accountNumber"></div>
                    <div><p>Enter CVV</p></div>
                    <div><input type="text" id="accountCVV"></div>
                    <div><p>Enter Expiry Date</p></div>
                    <div><input type="text" id="accountExpiry"></div>
                </div>
  
                <div class="cardImgs">
                    <div><img src="./images/cards/visa.png" alt=""></div>
                    <div><img src="./images/cards/mastercard.jpg" alt=""></div>
                    <div><img src="./images/cards/amex.png" alt=""></div>
                </div>
                <button class="payNowBtn" id="payment">
                    Pay Now
                </button>
            </div>
  
        </center>
    </div>`
    let payNowBtn = document.getElementsByClassName('payNowBtn')
    close1=document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
    Array.from(payNowBtn).forEach((ele)=>{
      ele.addEventListener('click',function payNowBtn(){
          popupp.removeChild(popupp.firstElementChild)
          addSuccessAlert();
          return true;

      })
    })
  })
})
  }
})

// console.log(itemCard)
Array.from(itemCard).every((ele)=>{
  let itemCardText=ele.getElementsByClassName('lines')[0].getElementsByTagName("p")[0].innerText
  // console.log(itemCardText)
  function checkICT(){
    if(itemCardText=="Vivo Y01")
    {
      return false
    }
    else return true;
  }
  return checkICT();
})

// let itemCardLines = document.getElementsByClassName('lines')


// Array.from(itemCardLines).forEach((element)=>{
//   let inner = element.getElementsByTagName("p")[0]
//   console.log(inner.innerText)
// }) 