//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
/*const productList = [
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
*/
window.productList = [
  {
    id: "01",
    name: "Gà Rán Truyền Thống",
    price: 36000,
    image: "../assets/images/garan.jpg",
    productLink: "detail.html",
    desc: "Gà rán truyền thống tại cửa hàng chúng tôi là sự kết hợp hoàn hảo giữa kỹ thuật chế biến thủ công và công thức tẩm ướp gia truyền độc đáo. Mỗi miếng gà được tuyển chọn kỹ lưỡng từ nguồn thịt tươi sạch, đảm bảo độ chắc ngọt và hàm lượng dinh dưỡng cao nhất cho thực khách. Lớp vỏ bên ngoài được phủ một lớp bột mỏng, chiên ở nhiệt độ tiêu chuẩn để đạt được độ giòn tan lý tưởng, vàng ruộm bắt mắt mà không hề gây cảm giác ngấy mỡ. Khi thưởng thức, bạn sẽ cảm nhận được tiếng rắc rắc vui tai từ lớp vỏ, ngay sau đó là phần thịt bên trong mọng nước, mềm mại và thấm đẫm hương vị tự nhiên của tiêu, tỏi và các loại thảo mộc đặc trưng. Đây là lựa chọn số một cho những tín đồ yêu thích hương vị nguyên bản, thuần túy của món gà rán. Món ăn này không chỉ phù hợp cho những bữa ăn nhanh tiện lợi mà còn là tâm điểm cho những buổi tụ tập bạn bè, người thân, tạo nên những khoảnh khắc gắn kết tuyệt vời bên bàn ăn ấm cúng và đầy ắp tiếng cười."
  },
  {
    id: "02",
    name: "Gà Sốt Đậu (Soy Garlic)",
    price: 41000,
    image: "../assets/images/gasotSoy.jfif",
    productLink: "detail.html",
    desc: "Gà sốt đậu Soy Garlic mang đến một trải nghiệm ẩm thực đậm chất Á Đông với sự kết hợp tinh tế giữa truyền thống và hiện đại. Điểm nhấn đặc sắc nhất của món ăn chính là lớp nước sốt đậu nành đậm đà, được đun liu riu cùng tỏi tươi băm nhuyễn và các gia vị bí truyền để tạo nên độ sánh mịn, bóng mượt bao phủ lấy từng miếng gà chiên giòn. Vị mặn nhẹ của nước tương cao cấp quyện cùng chút ngọt thanh của mật ong và hương thơm nồng nàn đặc trưng của tỏi cháy tạo nên một sức hút khó cưỡng ngay từ lần đầu chạm môi. Lớp da gà vẫn giữ được độ giòn nhẹ dù đã thấm đẫm nước sốt, trong khi phần thịt bên trong lại mềm thơm và ngọt vị tự nhiên. Món gà sốt đậu này không chỉ là một món ăn, mà là một tác phẩm nghệ thuật về sự cân bằng vị giác, phù hợp với khẩu vị của mọi lứa tuổi từ trẻ em đến người lớn. Đây là lựa chọn hoàn hảo khi dùng kèm với một bát cơm trắng nóng hổi hoặc thưởng thức riêng biệt để cảm nhận trọn vẹn sự tinh túy trong từng thớ thịt gà được chăm chút kỹ lưỡng."
  },
  {
    id: "03",
    name: "Gà Sốt Hot&Sweet",
    price: 41000,
    image: "../assets/images/gasotHS.jfif",
    productLink: "detail.html",
    desc: "Nếu bạn là người yêu thích sự bùng nổ của vị giác, Gà Sốt Hot&Sweet chính là món quà dành riêng cho bạn với sự kết hợp tương phản nhưng vô cùng hài hòa giữa vị cay nồng và ngọt dịu. Nước sốt được chế biến từ những quả ớt tươi chọn lọc, kết hợp với các loại sốt trái cây tự nhiên tạo nên màu đỏ óng ánh, bắt mắt và kích thích thị giác mạnh mẽ. Ngay khi nếm thử, bạn sẽ cảm nhận được vị ngọt nhẹ nhàng lan tỏa trên đầu lưỡi, sau đó là hậu vị cay nồng dần dần chiếm lấy vị giác, tạo nên một cảm giác sảng khoái và cực kỳ đưa miệng. Thịt gà được chiên giòn theo tiêu chuẩn khắt khe, giúp lớp nước sốt thấm sâu vào từng thớ thịt mà không làm mất đi độ giòn rụm đặc trưng. Món ăn này đặc biệt được ưa chuộng trong những ngày thời tiết se lạnh hoặc những buổi tiệc tối đầy năng lượng. Hãy chuẩn bị sẵn một ly nước giải khát mát lạnh bên cạnh, bởi sự kích thích từ vị cay ngọt này sẽ khiến bạn không thể ngừng đũa, mang đến một hành trình khám phá ẩm thực đầy thú vị và đáng nhớ tại cửa hàng của chúng tôi."
  },
  {
    id: "04",
    name: "Burger Teriyaki",
    price: 45000,
    image: "../assets/images/teriyaki.jfif",
    productLink: "detail.html",
    desc: "Burger Teriyaki là sự giao thoa văn hóa ẩm thực độc đáo giữa phong cách bánh kẹp phương Tây và hương vị nước sốt Nhật Bản trứ danh. Trái tim của món Burger này chính là miếng nhân thịt được nướng trực tiếp trên lửa, giữ trọn vẹn độ mềm mại và mùi thơm đặc trưng của thịt nướng. Lớp sốt Teriyaki màu nâu cánh gián, bóng bẩy và đặc sánh được rưới đều lên mặt thịt, mang theo vị ngọt thanh đặc trưng của rượu Mirin và vị đậm đà của nước tương Nhật Bản. Kẹp giữa hai lớp bánh mì mềm mịn, được nướng sơ để tạo độ thơm, là các lớp rau xà lách tươi xanh, cà chua mọng nước và một chút hành tây giòn ngọt, giúp cân bằng hoàn hảo vị béo của thịt. Mỗi miếng cắn là một sự hòa quyện của nhiều tầng kết cấu: sự mềm mại của bánh mì, độ giòn của rau củ và sự đậm đà của nước sốt thấm trong thịt. Đây là lựa chọn lý tưởng cho một bữa trưa nhanh gọn nhưng vẫn đảm bảo đầy đủ chất dinh dưỡng và mang lại cảm giác thỏa mãn tối đa cho những ai đang tìm kiếm một hương vị Burger mới lạ, khác biệt hoàn toàn so với những dòng sản phẩm thông thường."
  },
  {
    id: "05",
    name: "Burger Gà",
    price: 52000,
    image: "../assets/images/L-Chicken.jfif",
    productLink: "detail.html",
    desc: "Burger Gà là một trong những sản phẩm biểu tượng được khách hàng yêu thích nhất tại hệ thống nhờ sự kết hợp hài hòa giữa các nguyên liệu tươi sạch và phương pháp chế biến tỉ mỉ. Phần nhân gà được làm từ ức gà nguyên miếng, tẩm bột chiên xù vàng óng, đảm bảo độ giòn tan bên ngoài nhưng vẫn giữ được sự mềm mại, không hề bị khô bên trong. Điểm làm nên sự khác biệt của món ăn chính là lớp sốt mayonnaise đặc chế, béo ngậy và thơm mịn, quyện cùng những lát dưa chuột muối chua thanh và xà lách tươi rói từ trang trại. Bánh mì kẹp được làm từ bột mì cao cấp, có độ đàn hồi tốt và mùi thơm của bơ sữa, tạo nên một tổng thể món ăn cân đối về cả hình thức lẫn hương vị. Với kích thước đầy đặn, món Burger Gà cung cấp nguồn năng lượng dồi dào cho một ngày làm việc và học tập hiệu quả. Sản phẩm là minh chứng cho cam kết về chất lượng và hương vị tuyệt hảo mà chúng tôi muốn gửi gắm đến từng thực khách, biến mỗi bữa ăn đơn giản trở thành một trải nghiệm ẩm thực chất lượng cao và tràn đầy cảm hứng."
  },
  {
    id: "06",
    name: "Khoai Tây Chiên",
    price: 28000,
    image: "../assets/images/khoaitaychien.jfif",
    productLink: "detail.html",
    desc: "Khoai Tây Chiên không chỉ đơn thuần là một món ăn kèm, mà còn là linh hồn của những bữa tiệc đồ ăn nhanh tại cửa hàng chúng tôi. Những củ khoai tây đạt chuẩn được tuyển chọn kỹ lưỡng, sau đó được cắt sợi đồng đều và trải qua quy trình chiên hai lần độc đáo. Phương pháp này giúp từng sợi khoai có được lớp vỏ ngoài vàng ruộm, giòn tan cực độ trong khi phần ruột bên trong vẫn giữ được độ bùi, thơm và mềm mịn như kem. Một chút muối tinh được rắc nhẹ lên trên ngay khi vừa ra khỏi lò giúp làm dậy lên vị ngọt tự nhiên của khoai tây. Bạn có thể thưởng thức món ăn này cùng với tương cà chua ngọt hoặc tương ớt cay nồng để tăng thêm phần hấp dẫn. Dù là dùng để nhâm nhi trong lúc chờ đợi món chính hay làm món ăn kèm cùng Burger và Gà rán, khoai tây chiên vẫn luôn giữ được sức hút mãnh liệt nhờ cảm giác giòn rụm vui tai và vị ngon giản dị nhưng gây nghiện. Đây chắc chắn là món ăn mà bất kỳ ai, từ trẻ nhỏ đến người lớn, đều không thể chối từ khi ghé thăm cửa hàng của chúng tôi."
  },
  {
    id: "07",
    name: "Mực Rán",
    price: 28000,
    image: "../assets/images/mucran.jfif",
    productLink: "detail.html",
    desc: "Mực Rán là món khai vị hải sản đầy hấp dẫn, mang đến luồng gió mới cho thực đơn của chúng tôi với hương vị biển cả tươi mới và kỹ thuật chế biến tinh tế. Những vòng mực tươi rói được làm sạch, cắt khoanh vừa ăn và tẩm ướp một chút gia vị đặc trưng để giữ nguyên độ ngọt tự nhiên. Sau đó, mực được bao phủ bởi một lớp bột chiên xù đặc biệt, tạo nên những nếp gấp giòn tan sau khi qua chảo dầu nóng. Khi thưởng thức, bạn sẽ cảm nhận được sự đối lập thú vị giữa lớp vỏ giòn rụm bên ngoài và phần thịt mực dai sần sật, ngọt lịm bên trong. Món ăn này được phục vụ kèm với một loại sốt chấm đặc biệt, giúp làm tôn lên vị tươi của hải sản mà không gây cảm giác ngấy. Mực rán là lựa chọn tuyệt vời cho những ai muốn thay đổi khẩu vị từ thịt sang hải sản hoặc muốn tìm kiếm một món ăn nhẹ độc đáo để chia sẻ cùng bạn bè. Sự tươi ngon của nguyên liệu kết hợp với sự khéo léo trong chế biến đã tạo nên một món ăn không chỉ đẹp mắt về hình thức với màu vàng óng ả mà còn chinh phục hoàn toàn vị giác thực khách."
  },
  {
    id: "08",
    name: "Cơm Gà Sốt Phô Mai",
    price: 48000,
    image: "../assets/images/cheeserice.jfif",
    productLink: "detail.html",
    desc: "Cơm Gà Sốt Phô Mai là một món ăn mang tính sáng tạo cao, được thiết kế dành riêng cho những tín đồ của phô mai muốn tìm kiếm một bữa ăn chính chắc bụng và đầy đủ dinh dưỡng. Đĩa cơm được bày trí bắt mắt với phần cơm trắng dẻo thơm, nóng hổi, ăn kèm với miếng gà rán giòn tan đặc trưng của cửa hàng. Điểm nhấn làm nên linh hồn của món ăn chính là lớp sốt phô mai tan chảy thơm lừng, béo ngậy được rưới trực tiếp lên trên miếng gà, tạo nên một sự kết hợp hương vị bùng nổ. Vị mặn nhẹ và béo đặc trưng của phô mai hòa quyện cùng vị ngọt của thịt gà và độ dẻo của cơm tạo nên một cảm giác thỏa mãn khó tả. Món ăn còn được bổ sung thêm một ít rau củ trang trí để cân bằng vị giác và tăng thêm hàm lượng chất xơ cho bữa ăn. Đây là một sự lựa chọn tuyệt vời cho bữa trưa hoặc bữa tối, khi bạn cần một món ăn vừa ngon miệng, vừa cung cấp đủ năng lượng cho các hoạt động trong ngày, đồng thời tận hưởng trọn vẹn niềm đam mê với phô mai kéo sợi đầy hấp dẫn."
  },
  {
    id: "09",
    name: "Phô mai que",
    price: 36000,
    image: "../assets/images/cheesestick.jpg",
    productLink: "detail.html",
    desc: "Phô mai que là món ăn nhẹ 'quốc dân' chưa bao giờ hạ nhiệt, mang đến niềm vui đơn giản nhưng vô cùng lôi cuốn cho mọi thực khách. Mỗi que phô mai là sự kết tinh của lớp vỏ bột chiên xù mỏng, giòn tan bên ngoài và khối phô mai Mozzarella hảo hạng bên trong. Khi còn nóng, lớp phô mai bên trong có độ dẻo mịn tuyệt vời, cho phép bạn kéo sợi dài đầy thú vị, tạo nên những khoảnh khắc vui vẻ khi thưởng thức cùng bạn bè. Mùi thơm đặc trưng của phô mai hòa quyện với hương vị của lớp vỏ được chiên vàng đều tạo nên sức hút khó cưỡng. Món ăn này không chỉ chinh phục người dùng bởi vị béo ngậy, thơm lừng mà còn bởi trải nghiệm ăn uống mang tính giải trí cao. Để tăng thêm hương vị, bạn có thể chấm kèm với một chút tương ớt cay cay hoặc sốt mayonnaise béo ngọt. Phô mai que của chúng tôi cam kết sử dụng nguồn nguyên liệu phô mai sạch, đảm bảo an toàn vệ sinh thực phẩm và mang đến giá trị dinh dưỡng cao nhất, là món ăn vặt lý tưởng sau những giờ làm việc hay học tập căng thẳng, giúp bạn nạp lại năng lượng một cách nhanh chóng và vui vẻ."
  },
  {
    id: "10",
    name: "Kem",
    price: 22000,
    image: "../assets/images/kem.jfif",
    productLink: "detail.html",
    desc: "Kết thúc bữa ăn bằng một phần kem mát lạnh là cách tuyệt vời nhất để cân bằng lại vị giác sau khi thưởng thức các món chiên rán đậm đà. Kem của chúng tôi được chế biến từ nguồn sữa tươi nguyên chất và các nguyên liệu tự nhiên, mang đến độ mịn màng, tan chảy ngay khi vừa chạm vào đầu lưỡi. Với vị ngọt thanh nhẹ nhàng, không quá gắt, kem giúp làm dịu đi cảm giác nóng của các món chính và mang lại sự sảng khoái tức thì. Mỗi phần kem đều được đựng trong những chiếc ốc quế giòn rụm hoặc ly xinh xắn, được trang trí tinh tế để làm hài lòng cả những thực khách khó tính nhất. Dù là hương vani truyền thống, socola đậm đà hay các hương vị trái cây theo mùa, kem luôn là món tráng miệng hoàn hảo được mọi lứa tuổi yêu thích. Trong không gian ấm cúng của cửa hàng, một ly kem mát lạnh không chỉ là món tráng miệng đơn thuần, mà còn là một nốt nhạc nhẹ nhàng, ngọt ngào khép lại hành trình khám phá ẩm thực của bạn, để lại những dư vị êm ái và cảm giác hài lòng trọn vẹn trước khi ra về."
  }
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

const formatPrice = (price) =>
  price.toLocaleString('vi-VN') + "đ";

function showProduct(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = "";

  products.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
      <div class="card product-card h-100">

        <img src="${item.image}" class="product-img" alt="${item.name}">

        <div class="card-body text-center d-flex flex-column">

          <h6 class="mb-2">${item.name}</h6>

          <p class="text-danger fw-bold mb-3">
            ${formatPrice(item.price)}
          </p>

          <a href="${item.productLink}?id=${item.id}" 
             class="btn btn-sm btn-danger mt-auto w-100">
            Xem chi tiết
          </a>

        </div>
      </div>
    `;

    container.appendChild(col);
  });
}