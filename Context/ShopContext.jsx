import React, { createContext, useState } from "react";
import allProduct from "../assets/all_product";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    
const contextValue = {allProduct};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;