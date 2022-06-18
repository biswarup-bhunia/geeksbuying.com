let img=document.querySelector("#img");
    let buttons= document.querySelectorAll("button");
    let imgArr = ["https://img.gkbcdn.com/bn/2206/740x670-62a832772b40c920d48b90e3._p1_.jpg",
    "https://img.gkbcdn.com/bn/2206/740x670-62a007cb2b40c92a74a1cbd8._p1_.jpg","https://img.gkbcdn.com/bn/2206/740x670-629ffdf02b40c92a74417d6f._p1_.jpg","https://img.gkbcdn.com/bn/2206/740x670-62a0002d2b40c92a74417d70._p1_.jpg"];
    let imgNum=0;
    buttons[0].addEventListener("click",function(){
      if(imgNum===0){
          imgNum=imgArr.length-1;
      }else{
          imgNum--;
      }
      img.src=imgArr[imgNum];
    })
    buttons[1].addEventListener("click",function(){
      if(imgNum===imgArr.length-1){
          imgNum=0;
      }else{
          imgNum++;
      }
      img.src=imgArr[imgNum];
    })
    let trandingData=[{img:"https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",heading:"Smart Home",about:"smarts cleaning robots and vacuums,keep floors constantly tidly with very little effort on your part."},{img:"https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg",heading:"E-transport",about:"My ride. My speed. My way. i'm keeping up with myself."},{img:"https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg",heading:"3D Printers",about:"3D printers allow youo to bring digitily modeled designs to life by using highly detailed filament printing."}];

    trandingData.forEach(function(elem){
        let div1 = document.createElement("div");
        let Img = document.createElement("img");
        Img.setAttribute("src",elem.img)
        let heading = document.createElement("h2");
        heading.innerText= elem.heading;
        let about = document.createElement("p");
        about.innerText=elem.about;
        about.style.color = "gray";
        div1.append(Img,heading,about)
        
        document.querySelector("#TrendingCategories").append(div1)
    })
    let newforyouData = [{img:"https://img.gkbcdn.com/p/2022-06-07/C127-RC-Helicopter-2-4G-4CH-6-Axis-Gyro-720P-Camera-with-Remote-Contro-501582-0._w280_p1_.jpg",details:"C127 RC Helicopter 2.4G 4CH 6-Axis Gyro 720P Camera Optical Flow ",price:"□9662.41"},{img:"https://img.gkbcdn.com/p/2022-05-27/xiaomi-mi-band-7-black-17e243-1653647543366._w280_p1_.jpg",details:"XIAOMI Mi Band 7 Smart Bracelet Smart Wristband Watch AMOLED",price:"□4589.22"},{img:"https://img.gkbcdn.com/p/2022-05-27/MEROCA-WR15-WR25-Cushion-mounting-bracket-501368-0._w280_p1_.jpg",details:"Cushion Mounting Bracket for MEROCA WR15 WR25 Smart Bike Tail ",price:"□240.78"}]

    // newforyouData.forEach(function(elem){
    //     let div= document.createElement("div");
    //     let img = document.createElement("img");
    //     img.setAttribute("src",elem.img);
    //     let details= document.createElement("p");
    //     details.innerText=elem.details;
    //     let price = document.createElement("h3");
    //     price.innerText=elem.price;
    //     div.append(img,details,price);
    //     document.querySelector(".newforyouDiv2_2").append(div)
    // })

    let img1=document.querySelector("#Img1");
    let img2=document.querySelector("#Img2");
    let img3=document.querySelector("#Img3");
    let btns= document.querySelectorAll(".btns");
    let newforyouImgArr = ["https://img.gkbcdn.com/p/2022-06-11/J2-Colorful-Flame-Diffuser-with-3D-Dynamic-Mist-502439-0._w280_p1_.jpg",
    "https://img.gkbcdn.com/p/2022-06-14/Roborock-S7-S7-MAXV-Plus-Auto-Suction-Station-Dust-Bag-and-Support-502885-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-05-30/3-5-Inch-IPS-TYPE-C-Secondary-Screen-CPU-GPU-RAM-HDD-Monitoring-501430-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-03-25/BreaThru--The-Simple-Spirometer-that-Goes-Anywhere-498339-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-04-09/Xiaomi-Mijia-H500-Water-Ion-Hair-Dryer-499371-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-04-14/X9-Plus-Laptop-Core-i5-8279U-8GB-128GB-499619-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-06-11/Nextool-12-In-1-900lm-Music-Pulse-Lamp-502644-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-04-28/QASIQ-Self-Discipline-Rotation-Timer-500023-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-03-24/Cycling-Wireless-Turning-Signal-Light-for-Bycicle-and-Scooter-498284-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-05-23/68356b7ef7904bcd990edda141b5baa6-501236-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2020-04-11/10pcs-eu-standard-ffp2-nr-disposable-respirator-mask-white-1586590707732._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-04-28/UN201-Medical-Mini-Handheld-Portable-USB-Charging-Inhale-Nebulizer-500029-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-06-11/Sabbat-E18-TWS-Earbuds-Wireless-Bluetooth-5-2-Dark-Black-502451-0._w280_p1_.jpg","https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-X10-Bluetooth-Alarm-Clock-Speaker-Black-501614-0._w280_p1_.jpg"];
    let ImgNum=4;
    btns[0].addEventListener("click",function(){
      if(ImgNum===4){
          ImgNum=newforyouImgArr.length-1;
         
      }else{
          ImgNum--;
      }
      img1.src=newforyouImgArr[ImgNum];
      img2.src=newforyouImgArr[ImgNum-1];
      img3.src=newforyouImgArr[ImgNum-2];

    })
    btns[1].addEventListener("click",function(){
      if(ImgNum===newforyouImgArr.length-4){
          ImgNum=3;
      }else{
          ImgNum++;
      }
      img1.src=newforyouImgArr[ImgNum];
      img2.src=newforyouImgArr[ImgNum+2];
      img3.src=newforyouImgArr[ImgNum+4];

    })
    function slide1(){
        document.getElementById("slideimage").src="https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg";
    }
    function slide2(){
        document.getElementById("slideimage").src="https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg";
    }
    function slide3(){
        document.getElementById("slideimage").src="https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg";
    }
    setInterval(slide1,2000);
    setInterval(slide2,4000);
    setInterval(slide3,6000);
    

    let jimmyBrandData = [{img:"https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Pro-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461370-0._w280_p1_.jpg",off:"48% OFF",about:"JIMMY PowerWash HW8 Pro cordless wet dry smart",price:"16909.82",cutprice:"32209.91"},{img:"https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461369-0._w280_p1_.jpg",off:"72% OFF",about:"JIMMY PowerWash HW8 cordless wet dry smart",price:"11272.95",cutprice:"40261.59"},{img:"https://img.gkbcdn.com/p/2020-04-09/JIMMY-JV35-Anti-mite-Vacuum-Cleaner-Gray-899874-._w280_p1_.jpg",off:"29% OFF",about:"JIMMY JV35 Handheld Antimite Vacuum cleaner high",price:"9662.41",cutprice:"13688.75"},{img:"https://img.gkbcdn.com/p/2021-03-02/JIMMY-H9-Pro-Cordless-Handheld-Vacuum-Cleaner-455418-0._w280_p1_.jpg",off:"42% OFF",about:"JIMMY H9 Pro flexible smart handheld cordless vacuum",price:"28283.57",cutprice:"48314.75"}]

    jimmyBrandData.forEach(function(elem){
        let div= document.createElement("div")
        let img=document.createElement("img");
        img.setAttribute("src",elem.img);
        img.style.width= "80%"
        let off = document.createElement("p")
        off.innerText= elem.off;
        off.style.backgroundColor="red";
        off.style.width = "40%"
        off.style.color="white";
        off.style.borderRadius= "10px"
        off.style.textAlign="center"
        let about= document.createElement("p");
        about.innerText= elem.about;
        let price = document.createElement("p");
        price.innerText= elem.price;
        let cutprice = document.createElement("strike");
        cutprice.innerText= elem.cutprice;
        cutprice.style.color= "gray"
        div.append(img,off,about,price,cutprice);

        document.querySelector(".jimmyBrand02").append(div);
    })

    eleglideData = [{img:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg",off:"24% OFF",about:"ELEGLIDE M1 PLUS Electric Mountain Bike upgraded",price:"65103.50 ",cutprice:"85362.73"},{img:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg",off:"38% OFF",about:"ELEGLIDE M1 PLUS Electric Bike Upgraded Version 27.5inch",price:"54957.13",cutprice:"88577.88"},{img:"https://img.gkbcdn.com/p/2021-10-28/36v-10-4ah-removable-battery-for-eleglide-f1-electric-bike-1635406527480._w280_p1_.jpg",off:"21% OFF",about:"36 V10.4Ah Removeable battery For ELEGLIDE F1",price:"14047.90",cutprice:"17715.09"},{img:"https://img.gkbcdn.com/p/2021-10-28/36v-12-5ah-removable-battery-for-eleglide-m1-plus---m1-electric-bike-1635405942861._w280_p1_.jpg",off:"13% OFF",about:"36 V12.5Ah Removeable battery For ELEGLIDE M1",price:"19535.00",cutprice:"22546.70"}];

    eleglideData.forEach(function(elem){
        let div= document.createElement("div")
        let img=document.createElement("img");
        img.setAttribute("src",elem.img);
        img.style.width= "80%"
        let off = document.createElement("p")
        off.innerText= elem.off;
        off.style.backgroundColor="red";
        off.style.width = "40%"
        off.style.color="white";
        off.style.borderRadius= "10px"
        off.style.textAlign="center"
        let about= document.createElement("p");
        about.innerText= elem.about;
        about.style.fontSize= "15px"
        let price = document.createElement("p");
        price.innerText= elem.price;
        let cutprice = document.createElement("strike");
        cutprice.innerText= elem.cutprice;
        cutprice.style.color= "gray"
        div.append(img,off,about,price,cutprice);

        document.querySelector(".eleglide02").append(div);

        
    })
    let recommendedData = ["https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461369-0._w280_.jpg","https://img.gkbcdn.com/p/2021-03-02/JIMMY-H9-Pro-Cordless-Handheld-Vacuum-Cleaner-455418-0._w280_.jpg","https://img.gkbcdn.com/p/2021-09-17/Battery-Pack-For-JIMMY-HW8-Pro-Vacuum-Cleaner-Gray-472773-0._w280_.jpg","https://img.gkbcdn.com/p/2021-09-17/Original-Brushroll-for-JIMMY-HW8-HW8-Pro-472775-0._w280_.jpg","https://img.gkbcdn.com/p/2021-01-11/Xiaomi-JIMMY-H8-Pro-Cordless-Handheld-Vacuum-Cleaner-Purple-427169-0._w280_.jpg","https://img.gkbcdn.com/p/2022-04-07/909cca47ceb64f20b40bf8c04f5b78de-499246-0._w280_.jpg","https://img.gkbcdn.com/p/2021-07-23/2PCS-Roborock-Smart-Robotic-Vacuum-Cleaner-Side-Brushes-Black-461939-0._w280_.jpg","https://img.gkbcdn.com/p/2022-03-29/fa46dca6c73f4bcab974ee9beb786787-498445-0._w280_.jpg"];

    recommendedData.forEach(function(elem){
        let div = document.createElement("div");
        let img= document.createElement("img");
        img.setAttribute("src",elem);
        div.append(img);
        document.querySelector("#recommendedItem").append(div);
    })



    