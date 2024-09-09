import React from "react";

export default function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkbox" id="terms">
            <input type="checkbox" id="terms" /> i agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
