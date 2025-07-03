import React, { useState } from "react";
import { NavbarLeft } from "../Components/NavbarLeft";
import { NavbarTop } from "../Components/NavbarTop";

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen flex-col">
            <NavbarTop onMenuClick={() => setIsOpen(prev => !prev)} />
            <div className="flex flex-1">
                <NavbarLeft isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    );
}