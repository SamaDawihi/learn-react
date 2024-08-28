import React, { useEffect, useState } from "react";
import image from '../assets/image.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const storedToken = Cookies.get("token");
    if (!storedToken) {
        navigate("/login");
    }
    useEffect(() => {
        // Fetch user information when the component mounts
        axios.get('http://localhost:3001/user', {
            headers: {
                'Authorization': storedToken
            }
        })
        .then(response => {
            setUser(response.data.user);
        })
        .catch(error => {
            setError(error.message);
        });
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3001/logout', {
            headers: {
                'Authorization': storedToken
            }
        })
        .then(response => {
            Cookies.remove('token');
            navigate("/");
            window.location.reload();
        })
        .catch(error => {
            setError(error.message);
        });
    };

    return (
        <div className="flex flex-col items-center w-3/4 mx-auto">
            <img
                src={image}
                alt="Person"
                className="w-32 h-32 rounded-full mb-4"
            />
            {user ? (
                <>
                    <h1 className="text-2xl font-bold text-left mb-2">
                        Welcome {user.name}
                    </h1>
                    <p className="text-left text-gray-600 mb-4">
                        email: {user.email}
                    </p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <button
                className="w-52 h-12 bg-red-700 text-white rounded-md"
                onClick={handleLogout}
            >
                Logout
            </button>
            {error && <p className="text-red-600">{error}</p>}
            <p>{localStorage.getItem('authToken')}</p>
        </div>
    );
}

export default Profile;
