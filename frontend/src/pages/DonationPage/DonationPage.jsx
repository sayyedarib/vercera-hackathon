import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./DonationForm.css";

function DonationForm() {
  const {type} = useParams()
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [address, setAddress] = useState("");
  const [purpose, setPurpose] = useState("");

  const [pincode, setPincode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      amount,
      quantity,
      address,
      message,
      paymentOption,
      paymentType,
    });
    // Add your code here to submit the donation form
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  return (
    <>
      <div className="background">
        <form className="donation-form" onSubmit={handleSubmit}>
        <div className="donation-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Aarib"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="donation-form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="e.g. 8604078497"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
         {type==null|type=="NeedMoney"&& <div className="donation-form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>}

          {type=="GetBlood"&&<div className="donation-form-group">
            <label htmlFor="agegroup">Age Group</label>
            <select
              id="agegroup"
              value={ageGroup}
              onChange={setAgeGroup}
              required
            >
              <option value="">Select an option</option>
              <option value="kids">1-10</option>
              <option value="teen">10-20</option>
              <option value="adult">20-40</option>
              <option value="old">40-</option>
            </select>
          </div>}

          {type==="GetBlood"&&<div className="donation-form-group">
            <label htmlFor="bloodgroup">Blood Group</label>
            <select
              id="bloodgroup"
              value={ageGroup}
              onChange={setAgeGroup}
              required
            >
              <option value="">Select an option</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O">O</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>}

          {type==="FoodDonation"|type==="ClothDonation"|type==="DonateBlood"&&<div className="donation-form-group">
            <label htmlFor="quantity">{type?"Quantity":null}</label>
            <input
              type="number"
              id="quantity"
              placeholder={type === "FoodDonation" ? "e.g. how many people can be served" : type==="DonateBlood"?"e.g units of blood you wanna donate":"e.g. pairs of cloth you wanna donate"}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>}

          {type=="NeedMoney"&&
          <div className="donation-form-group">
            <label htmlFor="purpose">Purpose</label>
            <textarea
              id="purpose"
              value={purpose}
              rows='6'
              onChange={(e) => setPurpose(e.target.value)}
              placeholder='e.g. LIG 515 Housing Board Colony, Urban Estate, Phase 2, Focal Point, Ludhiana'
            ></textarea>

          </div>}

          
          {type=="NeedMoney"&&
          <div className="donation-form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={address}
              rows='6'
              onChange={(e) => setAddress(e.target.value)}
              placeholder='e.g. LIG 515 Housing Board Colony, Urban Estate, Phase 2, Focal Point, Ludhiana'
            ></textarea>

          </div>}

          {type!=null&&<div className="donation-form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              id="pincode"
              placeholder="e.g. 271124"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>}
          
          <div className="donation-form-group">
            <label htmlFor="message">Message(Optional)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {type==null&&<div className="donation-form-group">
            <label htmlFor="payment-option">Payment Option</label>
            <select
              id="payment-option"
              value={paymentOption}
              onChange={handlePaymentOptionChange}
              required
            >
              <option value="">Select an option</option>
              <option value="online">Online Payment</option>
              <option value="cash">Cash Payment</option>
            </select>
          </div>}
          {paymentOption === "online" && (
            <div className="donation-form-group">
              <label htmlFor="payment-type">Payment Type</label>
              <select
                id="payment-type"
                value={paymentType}
                onChange={handlePaymentTypeChange}
                required
              >
                <option value="">Select a payment type</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          )}
          <button type="submit">Donate</button>
        </form>
      </div>
    </>
  );
}

export default DonationForm;
