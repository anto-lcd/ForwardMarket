function displayPanier() {
    let cartItems = localStorage.getItem("ProduitDansPanier");
    cartItems = JSON.parse(cartItems);
    let ItemProduit = document.querySelector(".Panier");
    console.log(cartItems);
    if (cartItems && ItemProduit) {
        Object.values(cartItems).map(item => {
            ItemProduit.innerHTML += `<tr>
            <td> ${item.modele} </td>
            <td> ${item.couleur}</td>
            <td> ${item.stockage}</td>
            <td> ${item.dansPanier}</td>
            </tr>`;
        });
    }
}
displayPanier();