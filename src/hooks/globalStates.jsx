import { useState } from "react";

export const useMenu = () => {
    const [menu, setMenu] = useState({display: "none"});
    return {menu, setMenu};
};

export const useCar = () => {
    const [count, setCount] = useState([]);
    return {count, setCount};
};

export const useTotal = () => {
    const [total, setTotal] = useState(0);
    return {total, setTotal};
};

