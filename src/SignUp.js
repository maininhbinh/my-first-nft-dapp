import React, {useState} from "react";
import axios from "axios";

const SignUp = () => {
    const xkey = "l6m80mQGjAlxIZf0";
    let [password, setPassword] = useState();

    const create = (e) => {
        e.preventDefault()
        // console.log(password);
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", xkey);
        myHeaders.append("Content-Type", "application/json");
    
        const raw = JSON.stringify({
            "password": password
        });
    
        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        fetch("https://api.shyft.to/sol/v1/semi_wallet/create", requestOptions)
        .then(response => response.json())
        .then(({result:{wallet_address: walletAddress}}) => localStorage.setItem('wallet', walletAddress))
        .catch(error => console.log('error', error));

    }

    return (
        <div className="container">
            <form>
                <div>
                    <input className=" form-control " placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-info " onClick={create}>Đăng kí</button>
            </form>
        </div>
    )
}

export default SignUp;