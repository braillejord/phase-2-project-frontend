import React, { useState } from "react";

function Order({ selected, ticketQuantity }) {

    const [popcornSelect, setPopcornSelect] = useState('')
    const [popcornQty, setPopcornQty] = useState(0)
    const [candySelect, setCandySelect] = useState('')
    const [candyQty, setCandyQty] = useState(0)
    const [sodaSelect, setSodaSelect] = useState('')
    const [sodaQty, setSodaQty] = useState(0)
    const [seeThankYou, setSeeThankYou] = useState(false)

    const handlePopcornSelect = (e) => setPopcornSelect(e.target.value)
    const handlePopcornQty = (e) => setPopcornQty(e.target.value)
    const handleCandySelect = (e) => setCandySelect(e.target.value)
    const handleCandyQty = (e) => setCandyQty(e.target.value)
    const handleSodaSelect = (e) => setSodaSelect(e.target.value)
    const handleSodaQty = (e) => setSodaQty(e.target.value)

    const total = ((ticketQuantity * selected.ticketPrice) + (sodaQty * 2.5) + (popcornQty * 3) + (candyQty * 2))

    function handleOrderSubmit(e) {
        e.preventDefault();
        setSeeThankYou(true);
    }

    return (
        <>
            <h1 className="ui center aligned block header">My Order</h1>
            <form className="ui form" onSubmit={(e) => handleOrderSubmit(e)} >
                <div className="ui container">
                    <div>
                        <h2>~ Tickets ~</h2>
                        <h3>Movie: {selected.title}</h3>
                        <h3>Ticket Price: ${selected.ticketPrice}</h3>
                        <h3>Ticket Quantity: {ticketQuantity}</h3>
                    </div>
                    <h2>~ Concessions ~</h2>
                    <p id="set-concessions">Concession price control coming soon!</p>
                    <table className="ui yellow celled table">
                        <thead>
                            <tr><th>Popcorn 🍿 ($3.00)</th>
                                <th>Candy 🍫 ($2.00)</th>
                                <th>Soda 🥤 ($2.50)</th>
                            </tr></thead>
                        <tbody>
                            <tr>
                                <td>
                                    Type:
                                    <div className="ui field">
                                        <select
                                            className="ui dropdown"
                                            name="candy-type"
                                            onChange={handlePopcornSelect}
                                            value={popcornSelect}>
                                            <option value="butter">Butter</option>
                                            <option value="extra-butter">Extra Butter</option>
                                            <option value="kettle">Kettle Corn</option>
                                            <option value="cheddar">White Cheddar</option>
                                            <option value="jalapeno">Jalapeno</option>
                                            <option value="smores">S'mores</option>
                                        </select>
                                    </div>
                                    Quantity:
                                    <div className="ui small input">
                                        <input
                                            min="0"
                                            type="number"
                                            onChange={handlePopcornQty}
                                            value={popcornQty}
                                        />
                                    </div>
                                </td>
                                <td>
                                    Type:
                                    <div className="ui field">
                                        <select
                                            className="ui dropdown"
                                            name="candy-type"
                                            onChange={handleCandySelect}
                                            value={candySelect}>
                                            <option value="junior-mints">Junior Mints</option>
                                            <option value="whoppers">Whoppers</option>
                                            <option value="dots">Dots</option>
                                            <option value="twizzlers">Twizzlers</option>
                                            <option value="m-and-m">M&M</option>
                                            <option value="mike-and-ike">Mike & Ike</option>
                                        </select>
                                    </div>
                                    Quantity:
                                    <div className="ui small input">
                                        <input
                                            min="0"
                                            type="number"
                                            onChange={handleCandyQty}
                                            value={candyQty}
                                        />
                                    </div>
                                </td>
                                <td>
                                    Type:
                                    <div className="ui field">
                                        <select
                                            className="ui dropdown"
                                            name="type"
                                            onChange={handleSodaSelect}
                                            value={sodaSelect}>
                                            <option value="coca-cola">Coca Cola</option>
                                            <option value="root-beer">Root Beer</option>
                                            <option value="sprite">Sprite</option>
                                            <option value="mountain-dew">Mountain Dew</option>
                                            <option value="fanta">Fanta</option>
                                            <option value="dr-pepper">Dr Pepper</option>
                                        </select>
                                    </div>
                                    Quantity:
                                    <div className="ui small input">
                                        <input
                                            type="number"
                                            min="0"
                                            onChange={handleSodaQty}
                                            value={sodaQty}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Total: ${(Math.round(total * 100) / 100).toFixed(2)}</h2>
                    {seeThankYou
                        ? <h1 id="see-thanks" className="ui header">Thank you for your order!</h1>
                        : <button className="ui positive button">Place Order</button>
                    }
                </div>
            </form >
        </>
    );
}

export default Order;