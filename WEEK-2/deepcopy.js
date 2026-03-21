const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
            const copyorder=structuredClone(order)
            copyorder.customer.address.city="chennai";
            copyorder.items[0].price=25000
            console.log(order)
            console.log(copyorder)