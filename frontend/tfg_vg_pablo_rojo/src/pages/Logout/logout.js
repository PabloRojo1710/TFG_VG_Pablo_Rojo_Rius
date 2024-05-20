import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    useEffect(() =>{
        async function fetchData(){
            const requestOptions = {
                method: 'POST', 
                credentials: 'include'
            }
            try {
                const response = await fetch('http://localhost:5000/logout', requestOptions);
                if (response.ok) {
                const data = await response.json();
                console.log('Logout successful', data);
                //Cookies.remove('user');
                navigate("/");
                } else {
                console.error('Logout failed');
                }
            } catch (error) {
                console.error('Error sending logout data', error);
            }
        }
        fetchData()
    })

  return (
    <div >
        <h1>Login</h1>
    </div>
  );
}

export default Logout;
