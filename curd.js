
let title = document.getElementById('title')
let price = document.getElementById('price')
let texes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category =document.getElementById('category')
let create = document.getElementById('create')

// get-total //
function getTotal(){
    if(price.value!=''){
        let result =( +price.value + +texes.value + +ads.value) - discount.value; total.innerHTML=result
        total.style.background ='green'
    

    }
}



//create-product//
let datasave;
if(localStorage.product != null){
    datasave =JSON.parse(localStorage.product)
}else{
       let = datasave=[];
}

create.onclick = function(){
    let dataFeatures = {
        title :title.value,
        price :price.value,
        taxes :taxes.value,
        ads :ads.value,
        discount :discount.value,
        count :count.value,
        total: total.innerHTML,
        category:category.value
    }
    if(dataFeatures.count >1){
        for(let i =0; i<dataFeatures.count;i++){
            datasave.push(dataFeatures) 
        }
    }
    
    clear(),showData()
    localStorage.setItem('product',JSON.stringify(datasave))
    console.log(dataFeatures)

}
///////////clear//////////
function clear(){
    title.value='';
        price.value='';
        taxes.value='';
        ads.value='';
        discount.value='';
        count.value='';
        category.value='';
       total.innerHTML='';

}
//read
function showData(){
    let table ='';
    for(let i =0; i<datasave.length;i++){
        table += ` <tr>
                <td>${ i}</td>
                <td>${datasave[i]. title}</td>
                <td>${datasave[i].price}</td>
                <td>${datasave[i].taxes}</td>
                <td>${datasave[i].ads}</td>
                <td>${datasave[i].discount}</td>
                <td>${datasave[i].count}</td>
                <td>${datasave[i].category}</td>
                <td><button onclick="updateData(${i})" class="btn btn-primary w-100 " >update</button></td>
                <td><button onclick="deleteDATA( ${i})" class="btn btn-primary w-100 ">delete</button></td>
                
            </tr>`
        
    }


    document.getElementById('tbody').innerHTML = table

}
function deleteDATA(i){
    datasave.splice(i,1);
    localStorage.product =JSON.stringify(datasave);
    showData()
}
function updateData(i){
    title.value = datasave[i].title;
    price.value = datasave[i].price;
    texes.value= datasave[i].price;

    ads.value = datasave[i].ads;

    discount.value = datasave[i].discount;
    category.value =datasave[i].category;



}



