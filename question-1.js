// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 }, // 500
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200; //จำนวนแอปเปิ้ลเป็น 200 = 35*200 =7000 บาท
inventory.orange = { price: 20, quantity: 300 } // 6000 บาท
let totalValue = 0;

for (let calCost in inventory){
         totalValue += inventory[calCost].price * inventory[calCost].quantity

      }

console.log(`Total inventory value : ${totalValue}`) // 13500
