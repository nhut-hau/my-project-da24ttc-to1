//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
const productList = [
  {id: "01", name: "Burger Sườn Sài Gòn", price: 39000, image: "../assets/images/suonsaigon.jpg", productLink: "product-detail.html"},
  {id: "02", name: "Burger Bulgogi", price: 49000, image: "../assets/images/bulgogi.jpg", productLink: "product-detail.html"},
  {id: "03", name: "Burger Tôm (Shrimp Burger)", price: 49000, image: "../assets/images/shrimp.jpg", productLink: "product-detail.html"},
  {id: "04", name: "Burger Teriyaki", price: 45000, image: "../assets/images/teriyaki.jpg", productLink: "product-detail.html"},
  {id: "05", name: "Burger Phô Mai (Cheese)", price: 47000, image: "../assets/images/cheese.jpg", productLink: "product-detail.html"},
  {id: "06", name: "Burger L-Chicken", price: 55000, image: "../assets/images/chicken.jpg", productLink: "product-detail.html"},
  {id: "07", name: "Burger Ramen", price: 47000, image: "../assets/images/ramen.webp", productLink: "product-detail.html"},
  {id: "08", name: "Burger Double Double", price: 78000, image: "../assets/images/double.png", productLink: "product-detail.html"},
  {id: "09", name: "Burger Mozzarella", price: 79000, image: "../assets/images/mozzarella.jpg", productLink: "product-detail.html"},
  {id: "10", name: "Burger Zero Meat", price: 39000, image: "../assets/images/zero-meat.webp", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
    //Tạo một product item
    //1. Tao khung chua 1 item 
    const productItem = document.createElement ("div");
    productItem. setAttribute("class", "product-item col m-2");

    //2. Tạo khung chứa hình 
    const productImage = document. createElement ("div"); 
    productImage.setAttribute("class", "product-image h-75 ratio ratio-1x1 overflow-hidden");

    //3. Tạo đối tượng hình ảnh
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute ("class", "img-fluid object-fit-cover h-100");

    //4. Gán hình vào khung 
    productImage. appendChild(Image);
    
    //5. Tạo khung chứa thông tin
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info h-25 text-center");
    
    //Tạo paragraph 1 
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name) ;
    productName. appendChild(productNameText);

    //Tạo paragraph 2
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);

    //Tạo hyperLink
    const productLink = document.createElement ("a");
    const productLinkText = document.createTextNode("Xem chi tiết"); 
    productLink.appendChild(productLinkText); 
    productLink.setAttribute("href", hyperLink); 
    productLink.setAttribute("class", "btn btn-info");

    // gán paragraph 1, 2 và Link vào khung 
    productInfo.appendChild(productName); 
    productInfo.appendChild(productPrice); 
    productInfo.appendChild(productLink);

    //6. Gán khung hình và khung thông tin vào product item 
    productItem. appendChild(productImage); 
    productItem. appendChild(productInfo);

    //Gán product item vào product list
    document.getElementById("product-list").appendChild(productItem);
}