import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    //   const handleAdd = () => {
    //     setCategories([...categories, "Power Rangers"]);
    //      setCategories( cat => [...cat, "Nuevo"]); // callback 'cat' con valor de categories
    //   };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
};