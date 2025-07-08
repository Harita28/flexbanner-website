function calculatePrice() {
    const basePrice = 35;
    const size = document.getElementById("size").value;
    const totalPrice = basePrice * size;
    document.getElementById("calculated-price").innerText = totalPrice;
}

function addToCart(productId) {
    const size = document.getElementById("size").value;
    const fileInput = document.getElementById("upload-file");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a design file.");
        return;
    }

    const product = {
        id: productId,
        name: "One way vision",
        size: size,
        price: 35 * size,
        fileName: file.name
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}
