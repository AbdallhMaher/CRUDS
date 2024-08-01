# CRUDS
The Project Management System interface allows users to manage products through CRUD operations. It features a form for entering product details (name, category, price, description) and a table for displaying, updating, and deleting entries.

## Getting Started
This project is a starting point for Front-End Applications.

To get started with CRUDS:

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdallhMaher/CRUDS.git
   cd CRUDS
2. Open the project in your preferred code editor.

3. Run project on live server
## project view
<img src="images/Screenshot 2024-08-01 060713.png"  >
  
<img src="images/Screenshot 2024-08-01 060802.png"  >

<img src="images/Screenshot 2024-08-01 061004.png"  >



### java script code for display products


``` 
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
```

### particles.js plugin

```
window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles:true,
     color: '#ffffff' ,
  });
  
};
```

## Additional Information


**Social Media Links**: Connect with us on social media for more updates and food inspiration. Follow us on [Facebook](https://www.facebook.com/aljnrlabdullah.aljnrlabdullah) -facebook profile and [Instagram](https://www.instagram.com/abdllah_maher00/) - instagrm profile.

## Contact

For any questions or feedback, please contact me at ma4968867@gmail.com.
