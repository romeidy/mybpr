import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


export const validateToken = async (token) => {
    try {
        let res = await fetch("http://localhost:8000/login/validate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify({
            token: token,
        }),
        });

        if (!res.ok) throw new Error("Token validation failed");
        return true;
    } catch (error) {
        console.error(error); // Redirect to login if token validation fails
        return false;
    }
};

export const checkKue = (tokens) =>{
    const token = tokens;
    if (!token) {
        toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        // If no token is found, redirect to login page
        return false;
    }   
    return validateToken(token)
}

