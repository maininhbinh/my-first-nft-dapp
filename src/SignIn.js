import React, {useState} from "react";
import axios from "axios";

const SignIn = () => {
    const xkey = "l6m80mQGjAlxIZf0";
    let [password, setPassword] = useState();

    const create = (e) => {
        e.preventDefault()
        console.log(localStorage.getItem('wallet'));
        // console.log(password);
        var myHeaders = new Headers();
        myHeaders.append("x-api-key", xkey);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.shyft.to/sol/v1/semi_wallet/decrypt?password=${password}&wallet=${localStorage.getItem('wallet')}`, requestOptions)
        .then(response => response.json())
        .then(({result :{decryptionKey}}) => console.log(decryptionKey.json()))
        .catch(error => console.log('error', error));
    }

    return (
        <div className="container">
            <form>
                <div>
                    <input className=" form-control " placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-info " onClick={create}>Đăng nhập</button>
            </form>
        </div>
    )
}

export default SignIn;