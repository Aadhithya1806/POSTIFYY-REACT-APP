import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            {/* Icon */}

            <Link to="" className="bg-stone-200 P-4 text-stone-900">
                + Add A Post
            </Link>
            <Link to="login" className="bg-stone-200 P-4 text-stone-900">
                Login
            </Link>
        </header>
    );
};

export default Header;
