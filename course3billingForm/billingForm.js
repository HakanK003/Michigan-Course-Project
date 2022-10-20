/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){

    // check if the checkbox is checked
    if(document.getElementById('same').checked==1){

        //gets the value of the shippingName and assing it as the value of billingName by id
        document.getElementById('billingName').value = document.getElementById('shippingName').value;
    
        //gets the value of the shippingZip and assing it as the value of billingZip by id
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
        
    }else{

        //clear the value
        document.getElementById('billingName').value = "";
    
        //clear te value
        document.getElementById('billingZip').value = "";
    }
}