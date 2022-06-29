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
            <p>{props.errors.name}</p>
            <p>{props.errors.size}</p>
            <form id="pizza-form"className="pizza-form" onSubmit={onSubmit}>
                <div className='errors'>
                    <div>{'errors'.name}</div>
                </div>
                <label> Name:
                    <input
                        id="name-input"
                        name="name"
                        type="text"
                        value={props.values.name}
                        onChange={onChange}
                    />
                </label>
                <label> Size:
                    <select
                        id="size-dropdown"
                        name="size"
                        onChange={onChange}
                        value={props.values.size}
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
                            name="extraCheese"
                            type="checkbox"
                            checked={props.values.extraCheese}
                            onChange={onChange}
                        />
                    </label>
                    <label> Pepperoni
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={props.values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label> Onions
                        <input 
                            name="onions"
                            type="checkbox"
                            checked={props.values.onions}
                            onChange={onChange}
                        />
                    </label>
                    <label> Mushrooms
                        <input 
                            name="mushrooms"
                            type="checkbox"
                            checked={props.values.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <label> Special Requests:
                    <input 
                        id="special-text"
                        name="special"
                        type="text"
                        value={props.values.special}
                        onChange={onChange}
                    />
                </label>
                <input name="add" value="add to order"type="submit"id="order-button" disabled={props.disabled} />
            </form>
        </div>
       
    )
}