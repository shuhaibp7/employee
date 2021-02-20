import React, { useState } from "react";
import "./UserForm.css";

function UserApp() {
    // const [input_name, setInput_name] = useState("");
    // const [input_age, setInput_age] = useState("");
    // const [input_place, setInput_place] = useState("");
    // const [input_phone, setInput_phone] = useState("");
    // const [input_email, setInput_email] = useState("");

    // const handleChange = (event) => {
    //     setInput_name(event.target.value);
    //   };

    const [values, setValues]= useState({
        username:'',
        age:'',
        place:'',
        phoneNo:'',
        email:''
      })
      const handleInputChange = event =>{
        const{name, value}=event.target
        setValues({
          ...values,
          [name]:value
        })
      }
      const postUserData=(e,name,age,place,phone,email)=>{
          e.preventDefault();
        try{
            let result = fetch("https://602b5a2fef26b40017f1423a.mockapi.io/users",{
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: {name},
                age: {age},
                place:{place},
                phone:{phone},
                email:{email}
                
              }),
            //   data: JSON.stringify(data)
            });
            console.log("post result :" + result);
            console.log(name);

        }catch (e){
            console.log(e);

        }
    }
      
   
      
        return (
            <div className="user-form">
                <form className="input-section">
                    <h1>---Create profile---</h1>
                    <input
                        type="text"
                        placeholder="Enter Name..."
                        value={values.username}
                        name="username"
                        onChange={handleInputChange}
                        
                    >
                    </input>
                    <input
                        type="text"                      
                        placeholder="Enter Age..."
                        value={values.age}
                        name="age"
                        onChange={handleInputChange}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Enter Place..."
                        value={values.place}
                        name="place"
                        onChange={handleInputChange}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Enter Phone Number..."
                        value={values.phoneNo}
                        name="phoneNo"
                        onChange={handleInputChange}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Enter email..."
                        value={values.email}
                        name="email"
                        onChange={handleInputChange}
                    >
                    </input>
                    <button onClick={(event) =>postUserData(event,values.username,values.age,values.place,values.phoneNo,values.email)}>Submit</button>

                </form>
                
            </div>
        )
}
export default UserApp;
