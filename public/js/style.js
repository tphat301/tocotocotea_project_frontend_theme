window.addEventListener('load', function() {
    const cart = document.querySelector('.cart-link i');
    function modalOpen() {
        let templeat = 
            `<div class="modal">
                <div class="modal-contains">
                    <div class="modal-close"><i class="fa-solid fa-xmark"></i></div>
                    <div class="modal-content">
                        <form action="checkout.html" method="POST">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Giá tiền</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Thành tiền</th>
                                        <th scope="col">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td><img src="" alt=""></td>
                                        <td>#01</td>
                                        <td>Trà sữa dâu tằm</td>
                                        <td>1.000.000đ</td>
                                        <td><input type="number" value="1" min="1" class="cart-qty"></td>
                                        <td>2.000.000đ</td>
                                        <td><a href="">Xóa</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="fl">
                                <div class="fl-left">
                                    <a href="">Mua tiếp</a><br>
                                    <a href="">Xóa giỏ hàng</a>
                                </div>
                                <div class="fl-right">
                                    <div>Tổng tiền:<span class="total-price"> 2.000.000đ</span></div>
                                    <input type="submit" name="btn-checkout" class="btn-checkout" value="Thanh Toán">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML("afterbegin", templeat);
    }
    cart.addEventListener('click', function(event) {
        event.preventDefault();
        modalOpen(); 
    });
    document.body.addEventListener('click', function(event) {
        let parent = event.target.parentElement.parentElement.parentElement;
        if(event.target.matches('.modal-close i')) {
            parent.parentElement.removeChild(parent);
        } else if(event.target.matches('.modal')) {
            event.target.parentElement.removeChild(event.target);
        }
    });
}); 