import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
const HomePage = () => {
    return (
        <>
            <div className="flex flex-col">
                <Card
                    title={"Hello WOrld"}
                    author={"AAdhi"}
                    summary={"dsfdsfdsdfdsfdfd"}
                ></Card>
                <Card
                    title={"Hello WOrld"}
                    author={"AAdhi"}
                    summary={"dsfdsfdsdfdsfdfd"}
                ></Card>
            </div>
        </>
    );
};

export default HomePage;
