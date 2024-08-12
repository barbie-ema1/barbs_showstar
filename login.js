function addData(){
    let username, email, password, passwordd;
    username=document.getElementById("user-name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    passwordd=document.getElementById("passwordd").value;




    //localStorage.setItem("user-name",username);
    //localStorage.setItem("email",email);
    //localStorage.setItem("password",password);
    //localStorage.setItem("passwordd",passwordd);

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{
        return v.email==email

    })){
        alert("You already have an account please login!")
    }
    else{
        user_records.push({
            "user-name":username,
            "email":email,
            "password":password,
            "passwordd":passwordd
        })

        localStorage.setItem("users",JSON.stringify(user_records));
    }


    if(user_records.some((v)=>{
        return v.password!=passwordd

    })){
        alert("You re-enter a wrong password! Please try again")
    }
    else{
        user_records.push({
            "user-name":username,
            "email":email,
            "password":password,
            "passwordd":passwordd
        })

        localStorage.setItem("users",JSON.stringify(user_records));
    }



}


//for the login page




