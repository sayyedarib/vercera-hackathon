import React, { useState } from "react";
import "./VolunteerRegistration.css";

const VolunteerRegistration=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [volunteerType, setVolunteerType] = useState("food");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      location,
      availability,
      volunteerType,
    });
    // Add your code here to submit the volunteer form
  };



  return (
    <div className="header">
    <div className="volunteer-registration">
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <h2>Volunteer Registration Form</h2>
        <div className="volunteer-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Aarib"
            required
          />
        </div>
        <div className="volunteer-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. sayyedaribhussain4321@gmail.com"
            required
          />
        </div>
        <div className="volunteer-form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="8604078497"
            required
          />
        </div>
        <div className="volunteer-form-group">
          <label htmlFor="location">Location</label>
          <textarea
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        rows="7"
        placeholder="e.g. LIG 515, Housing Board Colony, Urban Estate, Phase 2, Focal Point, Ludhiana"
            required
          />
        </div>
        <div className="volunteer-form-group">
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </div>
        <div className="volunteer-form-group">
          <label htmlFor="volunteer-type">Volunteer Type</label>
          <select
            id="volunteer-type"
            value={volunteerType}
            onChange={(e) => {
    setVolunteerType(e.target.value)}
            }
            required
          >
            <option value="food">Food Collection</option>
            <option value="clothes">Clothes Collection</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
}

export default VolunteerRegistration;