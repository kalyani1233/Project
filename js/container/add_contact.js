import Contact from "../model/contact.js";
import ContactService from "../service/ContactService.js";

$(document).ready(function(){
    $("#add_contact").click(function(){
        let name=$("#name").val();
        let password=$("#subject").val();
        let email=$("#email").val();
        let message =$("#message").val();


        let contact=new Contact();
        console.log("Object:",contact);
        contact.name=name;
        contact.email=email;
        contact.password=password;
        contact.message=message;

        ContactService.addContactDetails(contact)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
        
    })
})