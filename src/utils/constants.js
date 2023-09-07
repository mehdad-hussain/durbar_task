const stats = [
  {
    number: 7540,
    title: "Order Received",
    icon: "images/orderRec.png",
    color: "red",
  },
  {
    number: 2625,
    title: "Today Delivered",
    icon: "images/delivery.png",
    color: "green",
  },
  {
    number: 9846,
    title: "New Customers",
    icon: "images/newCustomer.png",
    color: "#6257F7",
  },
  {
    number: 6532,
    title: "Net Earning",
    icon: "images/earning.png",
    color: "orange",
  },
  {
    number: 7540,
    title: "Daily sales",
    icon: "images/sales.png",
    color: "green",
  },
  {
    number: 6765,
    title: "Daily Expense",
    icon: "images/expense.png",
    color: "red",
  },
];

const orders = [
  {
    customer: "John Doe",
    orderId: "#12345",
    product: "Widget",
    quantity: 2,
    price: 10.99,
    status: "Paid",
  },
  {
    customer: "Jane Smith",
    orderId: "#67890",
    product: "Gadget",
    quantity: 1,
    price: 19.99,
    status: "Cancel",
  },
  {
    customer: "Bob Johnson",
    orderId: "#24680",
    product: "Thingamajig",
    quantity: 3,
    price: 7.99,
    status: "Paid",
  },
  {
    customer: "Alice Brown",
    orderId: "#13579",
    product: "Doohickey",
    quantity: 4,
    price: 5.99,
    status: "Paid",
  },
  {
    customer: "Charlie Green",
    orderId: "#86420",
    product: "Whatchamacallit",
    quantity: 2,
    price: 12.99,
    status: "Cancel",
  },
  {
    customer: "Eve White",
    orderId: "#97531",
    product: "Thingamajig",
    quantity: 1,
    price: 7.99,
    status: "Cancel",
  },
];

const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Excellent service and product quality!",
    time: "3 hours ago",
    imageSrc: "images/customerImage.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Fast delivery and great customer support.",
    time: "5 hours ago",
    imageSrc: "images/customerImage.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    feedback: "I love their products. Will buy again!",
    time: "8 hours ago",
    imageSrc: "images/customerImage.png",
  },
  {
    id: 4,
    name: "Bob Brown",
    feedback: "Good experience overall. Prompt delivery.",
    time: "12 hours ago",
    imageSrc: "images/customerImage.png",
  },
];

const foodData = [
  {
    id: 1,
    foodName: "Pizza Margherita",
    price: 12.99,
  },
  {
    id: 2,
    foodName: "Spaghetti Carbonara",
    price: 10,
  },
  {
    id: 3,
    foodName: "Chicken Alfredo",
    price: 14.99,
  },
  {
    id: 4,
    foodName: "Hamburger",
    price: 8,
  },
  {
    id: 5,
    foodName: "Salad Bowl",
    price: 7.99,
  },
];

export { stats, orders, feedbackData, foodData };
