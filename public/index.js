const AUTH_UPI = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP" //authentication API


document.querySelector(".auth-button").addEventListener(
    "click" , function(){
        const inputNumber = document.querySelector("#auth-number-input").value;
        if(isNaN(parseInt(inputNumber))){
            alert(`${inputNumber} is not a number`)
        }else{
            const otp_section = document.querySelector(".otp-section")
            otp_section.style.display = "block";
            generateAndValidate(inputNumber);
        }
    }
)


function generateAndValidate(mobile){
    console.log(mobile);
}

// curl --location --request GET 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=140&date=08-06-2021' \
// --header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'