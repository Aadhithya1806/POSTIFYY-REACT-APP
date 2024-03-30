import React from "react";

const Card = ({ title, author, summary }) => {
    return (
        <>
            <div className="bg-stone-800 text-stone-200 w-1/2 mt-2 mx-auto p-2">
                <div className="flex  justify-between my-1 px-1">
                    <h1 className="">{title}</h1>
                    <div className="flex">
                        <p className="italic"> {author}</p>
                    </div>
                </div>
                <p>{summary}</p>

                <button
                    className="bg-stone-200 w-1/4 mx-auto mt-0 flex justify-center text-stone-900"
                    onClick={() => {
                        console.log("first");
                    }}
                >
                    View
                </button>
            </div>
        </>
    );
};

export default Card;
