
let data = [{img:"https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_p1_.jpg",p:"Super Deals"},{img:"https://www.geekbuying.com/deals/categorydeals/",p:"All Flesh Deals"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=1241",p:"Sports & Outdoors"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=174",p:"Smart Home & Garden"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=177",p:"Consumer eletronic"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=178",p:"Phone & Accessories"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=505",p:"TV Boxes & Mini PCs"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=971",p:"Computer Table & Accessories"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=742",p:"toys & Hobbies"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=1549",p:"Wearable Devices"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=215",p:"Security System"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=439",p:"Automobiles & motorcycles"},{img:"https://www.geekbuying.com/deals/categorydeals/?id=423977&categoryid=2060",p:"Fashion"}];

data.forEach(function(elem){
    let div = document.createElement("div");
    let img1 = document.createElement("img");
    img1.setAttribute("src",elem.img)
    let about = document.createElement("p");
    about.innerText= elem.p;
    div.append(img1,about);
    document.querySelector("#categories").append(div)
})