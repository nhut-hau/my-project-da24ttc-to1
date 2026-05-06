//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
const productList = [
  {id: "01", name: "Gà Rán Truyền Thống", price: 36000, image: "../assets/images/garan.jpg", productLink: "product-detail.html"},
  {id: "02", name: "Gà Sốt Đậu (Soy Garlic)", price: 41000, image: "../assets/images/gasotSoy.jfif", productLink: "product-detail.html"},
  {id: "03", name: "Gà Sốt Hot&Sweet", price: 41000, image: "../assets/images/gasotHS.jfif", productLink: "product-detail.html"},
  {id: "04", name: "Burger Teriyaki", price: 45000, image: "../assets/images/teriyaki.jfif", productLink: "product-detail.html"},
  {id: "05", name: "Burger Gà", price: 52000, image: "../assets/images/L-Chicken.jfif", productLink: "product-detail.html"},
  {id: "06", name: "Khoai Tây Chiên", price: 28000, image: "../assets/images/khoaitaychien.jfif", productLink: "product-detail.html"},
  {id: "07", name: "Mực Rán", price: 28000, image: "../assets/images/mucran.jfif", productLink: "product-detail.html"},
  {id: "08", name: "Cơm Gà Sốt Phô Mai", price: 48000, image: "../assets/images/cheeserice.jfif", productLink: "product-detail.html"},
  {id: "09", name: "Phô mai que", price: 36000, image: "../assets/images/cheesestick.jpg", productLink: "product-detail.html"},
  {id: "10", name: "Kem", price: 22000, image: "../assets/images/kem.jfif", productLink: "product-detail.html"}
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

function showProduct(products)
{
  const container = document.getElementById('product-list');
  container.innerHTML = "";

  products.forEach(item => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item col-md-3 col-sm-6';

    productItem.innerHTML = `
      <div class="product-image ratio ratio-1x1 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover h-100">
      </div>
      <div class="product-info p-2 text-center">
        <p class="product-name mb-1">${item.name}</p>
        <p class="product-price text-danger fw-bold mb-2">
          ${item.price.toLocaleString('vi-VN')}đ
        </p>
        <a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100">
          Xem chi tiết
        </a>
      </div>
    `;

    container.appendChild(productItem);
  }); 
}