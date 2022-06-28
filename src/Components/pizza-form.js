import React from "react";

export default function Form(props) {

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        props.change(name, valueToUse);
    }

    return (
        <div>
            <h1>Pizza Form</h1>
            <form onSubmit={onSubmit}>
                <div className='errors'>
                    <div>{'errors'.name}</div>
                </div>
                <label> Name:
                    <input
                        name="name"
                        type="text"
                        // value={props.values.name}
                    />
                </label>
                <label> Size:
                    <select
                        // onChange={onChange}
                        // value={props.values.size}
                        name="size"
                    >
                        <option value="">--Select Size--</option>
                        <option value="12">12"</option>
                        <option value="16">16"</option>
                        <option value="18">18"</option>
                    </select>
                </label>
                <div className="toppings-checkbox">
                    <h2>Toppings</h2>
                    <label> Extra Cheese
                        <input 
                            name="extra-cheese"
                            type="checkbox"
                            // checked={values.extraCheese}
                            // onChange={onChange}
                        />
                    </label>
                    <label> Pepperoni
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            // checked={values.pepperoni}
                            // onChange={onChange}
                        />
                    </label>
                    <label> Onions
                        <input 
                            name="onions"
                            type="checkbox"
                            // checked={values.onions}
                            // onChange={onChange}
                        />
                    </label>
                    <label> Mushrooms
                        <input 
                            name="mushrooms"
                            type="checkbox"
                            // checked={values.mushrooms}
                            // onChange={onChange}
                        />
                    </label>
                </div>
                <label>
                    <input
                        name="special-request"
                        type="text"
                        //value={}
                    />
                </label>
                <button id="order-button" disabled={props.disabled}>Add to Order</button>
            </form>
        </div>
       
    )
}