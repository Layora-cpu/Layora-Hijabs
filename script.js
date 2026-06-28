const API_URL = "https://script.google.com/macros/s/AKfycbwDGkUZjzxnhVq2-E3Ky_OP9-Jsw6NvXT0UUljvEW0afxkAJT568lPIeEl5nTmC-2Gh/exec";

document.getElementById("checkoutForm").addEventListener("submit", async function(e){

e.preventDefault();

const data={
name:document.getElementById("name").value,
phone:document.getElementById("phone").value,
email:document.getElementById("email").value,
address:document.getElementById("address").value,
products:document.getElementById("products").value,
quantity:document.getElementById("quantity").value,
total:document.getElementById("total").value,
payment:document.getElementById("payment").value
};

document.getElementById("result").innerHTML="Submitting Order...";

try{

const response=await fetch(API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

const result=await response.json();

document.getElementById("result").innerHTML=
"<h3>✅ Order Placed Successfully</h3><p>Order ID: <b>"+result.orderId+"</b></p>";

const whatsappMessage=
*New Layora Order*%0A
Order ID: ${result.orderId}%0A
Name: ${data.name}%0A
Phone: ${data.phone}%0A
Address: ${data.address}%0A
Products: ${data.products}%0A
Quantity: ${data.quantity}%0A
Amount: ₹${data.total}%0A
Payment: ${data.payment};

window.open(
"https://wa.me/917899315879?text="+whatsappMessage,
"_blank"
);

document.getElementById("checkoutForm").reset();

}catch(err){

document.getElementById("result").innerHTML="❌ Error placing order.";

console.log(err);

}

});
