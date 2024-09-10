const user={
    Name:"Faisal", 

    email: "Faisal@gmail.com",
    
     Id:112233, 
    
     Available:false,
    
    function(){
        if(this.Available ==true){
            let msg="The user are Available"
            return msg
        }
        else{
            let msg="The user are not Available"
            return msg
        }
    },
    
     address:{
        country:"saudi",
    
        CityAddress:{
            City: "Riyadh" ,
            District: "Al Ramal District"
        }
        
        
       
     } ,
    
    skills:["coding","soft skils","desgin"]
}
//q1
console.log("_____________Q1___________________")
console.log(user)
//q2
console.log("_____________Q2___________________")
console.log(user.Name)
//q3
console.log("_____________Q3___________________")
console.log(user.ID = 11111)
//q4
delete user.email
console.log("_____________Q4___________________")
console.log(user)
//q5
console.log("_____________Q5___________________")
console.log(user.Available)
console.log(user.Available=true)

//q6
console.log("_____________Q6___________________")
console.log(user.address)
//q7
console.log("_____________Q7___________________")
console.log(user.address.CityAddress)
//q8
console.log("_____________Q8___________________")
console.log(user.skills)

 