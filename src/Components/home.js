import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const routeToPizza = () => {
        history.push("/pizza")
    }

    return (
        <div>
            <h1>Pizza Home Page</h1>
            <button
                onClick={routeToPizza}
                className="order-pizza"
                id="order-pizza"
            >
                Order Pizza
            </button>
        </div>
    )
}