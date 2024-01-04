import Feedback from "../model/feedback.js";
import FeedbackService from "../service/FeedbackService.js";

$(document).ready(function(){
    $("#submit").click(function(){
        let name=$("#name").val();
        let phone=$("#phone").val();
        let email=$("#email").val();
        let booking =$("#booking").val();
        let comments =$("#comments").val();


        let feedback=new Feedback();
        console.log("Object:",feedback);
        feedback.name=name;
        feedback.email=email;
        feedback.phone=phone;
        feedback.booking=booking;
        feedback.comments=comments;
        

        FeedbackService.addFeedbackDetails(feedback)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
        
    })
})