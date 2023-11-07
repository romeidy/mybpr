export const validateJwt = async (tokens) => {
    const token = tokens;
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

export const logout = async (tokens) => {
    console.log("logout")
    const token = tokens;
    try {
        let res = await fetch("http://localhost:8000/login/logout/", {
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
