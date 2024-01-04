import SnackService from "../service/SnackService.js";



$(document).ready(function(){
// if we are not using then and ctach here it will be a promise and if we are not using it will fetch but not displaye on console
    SnackService.getSnackDetails()
    .then((response)=>{
           console.log(response)
            SnackService.getSnackDetails();
            let products =response.data ;
            console.log(products)
            let div;
            for(let prod of products){
                div = `           
                
                <div class="col-xl-3 col-sm-6 mb-5 ">
                <div class="bg-white round shadow-sm py-5 px-4">
                    <img src="${prod._img}" alt="" width="100" class="img-fluid mb-3 img-thumbnail shadow-sm">
                    <h5 class="mb-0">${prod._product}</h5>
                    <span class="small text-uppercase text-muted">${prod._desc}</span>
                    <br><br>
                    <h5 class="mb-0">Rs. ${prod._price} /-</h5>
                </div>
                <a href="" class="btn btn-primary " id="add">+</a>
                <a href="" class="btn btn-primary" id="remove">-</a>
                

                </div>
            
                `
                // <button class="updateDetails btn btn-primary" id='updateDetails' id="${prod.id}" onclick="location.href='update_details.html';">Update</button>

                $(".card").append(div);
                
              
            }
       
           //  append will add the row in table
         
    })
    .catch((error)=>{
     console.log(error);

    })
    
// referece of div
   

}
)