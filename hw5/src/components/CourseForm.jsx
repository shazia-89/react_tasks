import { useFormik } from "formik";

function CourseForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      course: "",
      gender: "",
      dob: "",
      city: "",
      country: "",
      phone: "",
      education: "",
      address: "",
      state: "",
      zip: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.fullName) {
        errors.fullName = "Full name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      if (!values.course) {
        errors.course = "Please select a course";
      }

      if (!values.gender) {
        errors.gender = "Please select gender";
      }

      if (!values.dob) {
        errors.dob = "Date of birth is required";
      }

      if (!values.city) {
        errors.city = "City is required";
      }

      if (!values.country) {
        errors.country = "Country is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Full Name */}
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.errors.fullName && (
          <div className="error">{formik.errors.fullName}</div>
        )}
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>

      {/* Password */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}
      </div>

      {/* Course */}
      <div>
        <label>Course:</label>
        <label>
          <input
            type="radio"
            name="course"
            value="Course A"
            onChange={formik.handleChange}
          />
          Course A
        </label>
        <label>
          <input
            type="radio"
            name="course"
            value="Course B"
            onChange={formik.handleChange}
          />
          Course B
        </label>
        <label>
          <input
            type="radio"
            name="course"
            value="Course C"
            onChange={formik.handleChange}
          />
          Course C
        </label>
        {formik.errors.course && (
          <div className="error">{formik.errors.course}</div>
        )}
      </div>

      {/* Gender */}
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
          />
          Female
        </label>
        {formik.errors.gender && (
          <div className="error">{formik.errors.gender}</div>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          onChange={formik.handleChange}
          value={formik.values.dob}
        />
        {formik.errors.dob && (
          <div className="error">{formik.errors.dob}</div>
        )}
      </div>

      {/* City */}
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        {formik.errors.city && (
          <div className="error">{formik.errors.city}</div>
        )}
      </div>

      {/* Country */}
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        {formik.errors.country && (
          <div className="error">{formik.errors.country}</div>
        )}
      </div>

      {/* Phone */}
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </div>

      {/* Education */}
      <div>
        <label>Education:</label>
        <select
          name="education"
          onChange={formik.handleChange}
          value={formik.values.education}
        >
          <option value="">Select Education</option>
          <option value='School'>School</option>
          <option value="College">College</option>
          <option value="University">University</option>
        </select>
      </div>

      {/* Address */}
      <div>
        <label>Address:</label>
        <textarea
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
      </div>

      {/* State */}
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
      </div>

      {/* Zip */}
      <div>
        <label>Zip Code:</label>
        <input
          type="text"
          name="zip"
          onChange={formik.handleChange}
          values={formik.values.zip}
        />
      </div>

      {/* Submit */}
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default CourseForm;
