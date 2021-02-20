export default function validateUserInfo(values){
    let errors={}

    if(!values.username.trim()){
        errors.username="User name requered"
    }
    if(!values.email){
        errors.email="Email requered"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Email address is invalid"
    }
    
}


// [a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test