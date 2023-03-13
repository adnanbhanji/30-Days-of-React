import React, { useState } from "react";

const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>
    {" "}
    {label}
  </option>
));

const Form2 = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setState({
        ...state,
        skills: { ...state.skills, [name]: checked },
      });
    } else if (type === "file") {
      console.log(type, "cehck here");
      setState({ ...state, [name]: e.target.files[0] });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = state;

    const formattedSkills = [];

    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }

    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };

    console.log(data);
  };

  const {
    firstName,
    lastName,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    //country,
    gender,
    bio,
  } = state;

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telephone </label>
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={handleChange}
            placeholder="Tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth </label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color</label>
          <input
            type="color"
            id="color"
            name="color"
            value={favoriteColor}
            onChange={handleChange}
            placeholder="Favorite Color"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="Weight in Kg"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label> <br />
          <select name="country" onChange={handleChange} id="country">
            {selectOptions}
          </select>
        </div>

        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input
              type="checkbox"
              id="html"
              name="html"
              onChange={handleChange}
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="css"
              name="css"
              onChange={handleChange}
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={handleChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Bio</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            cols="120"
            rows="10"
            placeholder="Write about yourself ..."
          />
        </div>

        <div>
          <input type="file" name="file" onChange={handleChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
