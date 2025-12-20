async function spro(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    const product = {
        id: data.id,
        name: data.title,
        price: data.price,
        description: data.description,
        image: data.image
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "sproduct.html";
}

document.addEventListener("DOMContentLoaded", () => {


    const products = document.getElementsByClassName("pro");
    if (products.length > 0) {
        for (let po of products) {
            po.addEventListener("click", () => {
                spro(po.id);
            });
        }
    }


    const img = document.getElementById("sproductimg");
    if (img) {
        const currentpro = JSON.parse(localStorage.getItem("selectedProduct"));
        if (!currentpro) return;

        img.src = currentpro.image;
        document.getElementById("sproductname").innerText = currentpro.name;
        document.getElementById("sproductprice").innerText = "$" + currentpro.price;
        document.getElementById("sproductdesc").innerText = currentpro.description;
    }
});
