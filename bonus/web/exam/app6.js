data=[
    {
        "id": "1",
       "name":"Samsung S7",
       "price":"2500" 
    },
    {
        "id": "2",
       "name":"LG Optimus 6",
       "price":"3400"  
    }
]


function showData(){
    tb=document.querySelector("#datax");
    tb.innerHTML="";
        for(i=0;i<data.length;i++){
        mtr=document.createElement("tr");
        td1=document.createElement("td");
        td2=document.createElement("td");
        td3=document.createElement("td");
        input1 = document.createElement("input");
        input2 = document.createElement("input");
        
        td1.innerText=data[i].id;
        input1.value=data[i].name;
        input2.value=data[i].price;

        td2.append(input1);
        td3.append(input2);

        mtr.append(td1);
        mtr.append(td2);
        mtr.append(td3);
        
        tb.append(mtr);
        /*console.log(data[i].id);
        console.log(data[i].name);
        console.log(data[i].price)*/;}

}
window.onload=init;
sortingID = 1;
sortingNAME = 1;
sortingPRICE = 1;
function init(){
 
    document.querySelector("#save").onclick=onButton1Clicked;
    document.querySelector("#b_id").onclick=sort_id;
    document.querySelector("#b_name").onclick=sort_name;
    document.querySelector("#b_price").onclick=sort_price;
    showData();
}
function onButton1Clicked(){
   
  
    add_name=document.querySelector("#name").value;
    add_price=document.querySelector("#price").value; 
   /* console.log(add_name);
    console.log(add_price);
    console.log(data.length);*/
    data.push({"id":data.length+1,"name":add_name,"price":add_price});
    
    showData();
    
}

function sort_id(){
    if(sortingID==1){
        sortingID=0;
        b_id.innerText="▲ ID";
        data.sort(function(id1,id2){return id1.id-id2.id});

    }else{
        sortingID=1;
        b_id.innerText="▼ ID";
        data.sort(function(id1,id2){return id2.id- id1.id});
    }
    showData();
}
function sort_name(){
    if(sortingNAME==1){
        sortingNAME=0;
    b_name.innerText="▲ NAME";
    data.sort(function(name1,name2){
        var x=name1.name.toLowerCase();
        var y=name2.name.toLowerCase();
        if(x<y) {return -1;}
        if(x>y) {return 1;}
        return 0;
    });

    }else{
        sortingNAME=1;
    b_name.innerText="▼ NAME";
    data.sort(function(name1,name2){
        var x=name1.name.toLowerCase();
        var y=name2.name.toLowerCase();
        if(x<y){return -1;}
        if(x>y){return 1;}
        return 0;
    });
    showData();
}
}
function sort_price(){
    if(sortingPRICE==1){
        sortingPRICE=0;
        b_price.innerText="▲ PRICE";
        data.sort(function(price1,price2){
            return price1.price-price2.price});

    }else{
        sortingPRICE=1;
        b_price.innerText="▼ PRICE";
        data.sort(function(price1,price2){
            return price2.price-price1.price});
    }
    showData();
}
function editData(){
    for(i = 0; i < data.length; i++){
        
        nameNode = document.querySelector(
            "#datax tr:nth-child("+(i+1)+") td:nth-child(2) input");
        priceNode = document.querySelector(
            "#datax tr:nth-child("+(i+1)+") td:nth-child(3) input");
        
        data[i].name = nameNode.value;
        data[i].price = priceNode.value;
    }
}
function insert(event){
    if(event.keyCode == 13){
        editData();
    }
    if(event.keyCode == 27){
        showData();
}
}