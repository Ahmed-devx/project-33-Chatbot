var list = document.getElementById("list");
var typing = document.getElementById("typing");

function sendMessage(event) {
  if (event.keyCode === 13) {
    var elem = event.target;
    var msg = elem.value.trim();
    if (msg === "") return;

    list.innerHTML += "<li class='user'>" + msg + "</li>";
    typing.style.display = "block";

    const input = msg.toLowerCase();

    if (
      [
        "hi",
        "hello",
        "hey",
        "hy",
        "hyy",
        "salam",
        "asalam o alaikum",
        "hi there",
        "hello there",
        "hii",
        "help",
        "hay",
        "listen",
        "sunao",
        "h",
      ].includes(input)
    ) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>🤖 Hello! Welcome to <b>ShopEase Chatbot</b> 👋</li>";
      }, 2000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>Please choose an option:<br> 1️⃣ Product Info<br> 2️⃣ Offers & Discounts<br> 3️⃣ Payment Methods<br> 4️⃣ Shipping Info<br>  5️⃣ Store Locations<br> 6️⃣ Loyalty Program<br> 7️⃣ Return Policy<br> 8️⃣ Contact Support<br> 9️⃣ Exit</li>";
        typing.style.display = "none";
      }, 4000);
    } else if (["1", "product info", "product"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>📦 Please choose a category:<br>(a) Electronics<br>(b) Fashion<br>(c) Groceries</li>";
        typing.style.display = "none";
      }, 3000);
    } else if (["a", "electronics", "electronic"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>📱 <b>Electronics Section:</b><br>We offer the latest mobiles, laptops, headphones, and smartwatches.<br>Top Brands: Apple, Samsung, Dell, Sony, HP.<br>All electronics come with a 1-year warranty and free delivery.</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 6000);
    } else if (["b", "fashion"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>👗 <b>Fashion Section:</b><br>Explore trending styles for Men, Women, and Kids.<br>Categories: Casual, Formal, Sportswear & Accessories.<br>Exclusive deals every weekend up to 50% OFF!</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (["c", "groceries", "grocerie"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>🥦 <b>Groceries Section:</b><br>Shop fresh fruits, vegetables, and daily essentials.<br>All items are quality checked and delivered within 2 hours.<br>Free delivery for orders above Rs. 1000.</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (
      [
        "2",
        "offers",
        "discounts",
        "offers and discounts",
        "offers & discounts",
      ].includes(input)
    ) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💰 <b>Today’s Offers & Discounts:</b><br>Electronics – Flat 15% OFF on mobiles & laptops.<br>Fashion – Buy 2, Get 1 Free on all T-Shirts & Footwear.<br>Groceries – Up to 30% OFF on monthly bundles.<br>🎯 Use Code: <b>SHOP10</b> for an extra 10% discount.</li>";
        typing.style.display = "none";
      }, 2000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'><b>Select a category to explore offers:</b><br>(a) Electronics<br>(b) Fashion<br>(c) Groceries</li>";
        typing.style.display = "none";
      }, 3000);
    } else if (
      ["3", "payment methods", "payment", "methods", "method"].includes(input)
    ) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💵 <b>We offer multiple safe and convenient payment options:</b><br>Cash on Delivery (COD) – Pay when you receive your order.<br>Debit/Credit Cards – Visa, MasterCard, and UnionPay accepted.<br>Wallet Payments – JazzCash, EasyPaisa, and PayPak supported.<br>Bank Transfer – For corporate or bulk orders.</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (["4", "shipping info", "shipping"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>📦 <b>Shipping & Delivery Details:</b><br>Standard Delivery: 3–5 working days (Free on orders above Rs.1500).<br>Express Delivery: 24–48 hours (Available in major cities).<br>International Shipping: Coming soon!<br>Tracking: You’ll receive an SMS and Email with a tracking ID once your order ships.</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (["5", "store locations", "store", "locations"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>📍 <b>Our Store Locations:</b><br>Karachi – Dolmen Mall Clifton, 2nd Floor<br>Lahore – Packages Mall, Ground Floor<br>Islamabad – Centaurus Mall, 1st Floor<br><br>🕒 Store Timings: 10 AM – 10 PM<br>☎️ Customer Helpline: 021-123-4567</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (["6", "loyalty program", "loyalty", "program"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>🎉 <b>ShopEase Rewards Program:</b><br>Earn 1 Point for every Rs.100 spent.<br>Redeem points for instant discounts on your next order.<br>Get exclusive early access to new collections & deals.<br>Free delivery on all loyalty member orders.<br><br>👉 Type <b>join</b> to register for the Loyalty Program or <b>benefits</b> to see all perks again.</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (["7", "return policy", "return", "policy"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>🔄 <b>Return Policy:</b><br>Items can be returned within 7 days of delivery if unused and in original packaging.<br>Refunds are processed within 5 working days.</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (["8", "contact support", "contact", "support"].includes(input)) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>☎ <b>Contact Support:</b><br>📧 Email: support@shopease.com<br>📱 Phone: +92-300-1234567<br>🕒 Mon–Sat | 9 AM – 8 PM</li>";
        typing.style.display = "none";
      }, 3000);
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>💬 Thank you for chatting with <b>ShopEase!</b><br>Please select one of the 9 options above to continue exploring.<br>Your satisfaction is our priority ❤️</li>";
        typing.style.display = "none";
      }, 5000);
    } else if (
      [
        "9",
        "by",
        "thk",
        "theek",
        "set",
        "bas",
        "bs",
        "ok",
        "okay",
        "thanks",
        "thank you",
        "bye",
        "goodbye",
        "see you",
        "exit",
        "stop",
        "end chat",
      ].includes(input)
    ) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>Thank you for chatting with ShopEase Chatbot!<br>We hope we helped you today. Have a great day! 🌟</li>";
        typing.style.display = "none";
      }, 3000);
    } else {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='bot'>🤖 Sorry, I didn't understand that. Please choose between 1–9.</li>";
        typing.style.display = "none";
      }, 2000);
    }

    elem.value = "";
    list.scrollTop = list.scrollHeight;
  }
}
