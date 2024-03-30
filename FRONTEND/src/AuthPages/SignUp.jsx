import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    return (
        <Form method="post" action="/signup">
            <div>
                <label htmlFor="email">Username</label>
                <input type="text" value="" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" value="" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" value="" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </Form>
    );
};

export default Login;
