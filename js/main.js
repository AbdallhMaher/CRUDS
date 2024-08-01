
var ProductNameInput = document.getElementById("ProductName");
var productCataegoryInput = document.getElementById("productCataegory");
var productPriceInput = document.getElementById("productPrice");
var productDescInput = document.getElementById("productDesc");
var currentIndex =0;
var productsContainer = [];

if (localStorage.getItem("products") != null) {
   productsContainer = JSON.parse(localStorage.getItem("products"));
   displayProducts();
}

function addProduct() {
   if(validateProductName()==true)
   {
      var product = {
         name: ProductNameInput.value,
         categ: productCataegoryInput.value,
         price: productPriceInput.value,
         desc: productDescInput.value
      }
      productsContainer.push(product);
      localStorage.setItem("products", JSON.stringify(productsContainer));
      displayProducts();
   }
   else
   {
      window.alert('invalid name');
   }
   
}
function displayProducts() {
   var item = ``;
   for (var i = 0; i < productsContainer.length; i++) {
      item += `
   <tr>
   <td>`+ i + ` </td>
   <td>`+ productsContainer[i].name + `</td>
   <td>`+ productsContainer[i].categ + `</td>
   <td>`+ productsContainer[i].price + `</td>
   <td>`+ productsContainer[i].desc + `</td>
   <td><button onclick="UptadeProduct(`+ i + `);"class="btn btn-outline-danger btn-sm">Uptade</button></td>
   <td><button onclick="deleteProduct(`+ i + `);" class="btn btn-outline-warning btn-sm">Delete</button></td>
  </tr>`;
   }

   document.getElementById('tBody').innerHTML = item;
}
function UptadeProduct(index){
   currentIndex =index;
   ProductNameInput.value =productsContainer[index].name;
   productCataegoryInput.value =productsContainer[index].categ;
   productPriceInput.value =productsContainer[index].price;
   productDescInput.value =productsContainer[index].desc;

   document.getElementById("add").style.display = "none";
   document.getElementById("edit").style.display = "inline-block";
}
function editProduct()
{
   productsContainer[currentIndex].name = ProductNameInput.value ;
   productsContainer[currentIndex].categ = productCataegoryInput.value;
   productsContainer[currentIndex].price = productPriceInput.value;
   productsContainer[currentIndex].desc =  productDescInput.value;
   displayProducts();
   localStorage.setItem("products", JSON.stringify(productsContainer));
   document.getElementById("add").style.display = "inline-block";
   document.getElementById("edit").style.display = "none";
   clearForm();
}
function deleteProduct(productIndex) {
   productsContainer.splice(productIndex, 1)
   localStorage.setItem("products", JSON.stringify(productsContainer));
   displayProducts();
}
function searchProducts() {
   var searchValue = searchInput.value.toLowerCase();
   var item = ``
   for (var i = 0; i < productsContainer.length; i++) {
      if (productsContainer[i].name.toLowerCase().includes(searchValue) === true ||
         productsContainer[i].categ.toLowerCase().includes(searchValue) === true) {
         item += `
                  <tr>
                  <td>`+ i + ` </td>
                  <td>`+ productsContainer[i].name.toLowerCase().replace(searchValue, "<span class='text-danger fw-bold'>" + searchValue + "</span>") + `</td>
                  <td>`+ productsContainer[i].categ.toLowerCase().replace(searchValue, "<span class='text-danger fw-bold'>" + searchValue + "</span>") + `</td>
                  <td>`+ productsContainer[i].price + `</td>
                  <td>`+ productsContainer[i].desc + `</td>
                  <td><button class="btn btn-outline-danger btn-sm">Uptade</button></td>
                  <td><button onclick="deleteProduct(`+ i + `);" class="btn btn-outline-warning btn-sm">Delete</button></td>
                  </tr>`;

      }

   }

   document.getElementById('tBody').innerHTML = item;


}
function clearForm() {
   ProductNameInput.value = "";
   productCataegoryInput.value = "tv";
   productPriceInput.value = "";
   productDescInput.value = "";
}
function validateProductName()
{
   var regex =/^[A-Z][a-z]{3,8}/;
   return regex.test(ProductNameInput.value);
}
window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles:true,
     color: '#ffffff' ,
  });
  
};