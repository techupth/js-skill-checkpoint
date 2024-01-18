// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderTotal) {
  // เริ่มเขียนโค้ดที่นี่
  let ans = "";
  if (orderTotal > 4000){

   ans = "Shipping is free."

  }else if(orderTotal>=2000 && orderTotal <4000) {

    ans = "Shipping cost is 250 Baht."

  }else{
   ans = "Shipping cost is 500 Baht."
  }
return ans
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
