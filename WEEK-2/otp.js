console.log("otp send successfully")
let time=10
let Interval=setInterval(()=>{
    time--
    if(time>0){
            console.log(("resend available in "+time+"seconds "))
    }else{
        
            console.log("Resend OTP")
        clearInterval(Interval)
        }
},1000)
