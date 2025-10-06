import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CourseApplicationForm = () => {
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
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      course: Yup.string().required("Please select a course"),
      gender: Yup.string().required("Please select gender"),
      dob: Yup.string().required("Date of birth is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Course Application</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" {...formik.getFieldProps("fullName")} />
          {formik.touched.fullName && formik.errors.fullName && (
            <div style={{ color: "red" }}>{formik.errors.fullName}</div>
          )}
        </div>

        <div>
          <label>Email</label>
          <input type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label>Password</label>
          <input type="password" {...formik.getFieldProps("password")} />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </div>

        <div>
          <label>Course</label>
          <div>
            <label>
              <input type="radio" name="course" value="A" onChange={formik.handleChange} />
              Course A
            </label>
            <label>
              <input type="radio" name="course" value="B" onChange={formik.handleChange} />
              Course B
            </label>
            <label>
              <input type="radio" name="course" value="C" onChange={formik.handleChange} />
              Course C
            </label>
          </div>
          {formik.touched.course && formik.errors.course && (
            <div style={{ color: "red" }}>{formik.errors.course}</div>
          )}
        </div>

        <div>
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" onChange={formik.handleChange} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={formik.handleChange} />
              Female
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: "red" }}>{formik.errors.gender}</div>
          )}
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" {...formik.getFieldProps("dob")} />
          {formik.touched.dob && formik.errors.dob && (
            <div style={{ color: "red" }}>{formik.errors.dob}</div>
          )}
        </div>

        <div>
          <label>City</label>
          <input type="text" {...formik.getFieldProps("city")} />
          {formik.touched.city && formik.errors.city && (
            <div style={{ color: "red" }}>{formik.errors.city}</div>
          )}
        </div>

        <div>
          <label>Country</label>
          <select {...formik.getFieldProps("country")}>
            <option value="">Select country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Germany">Germany</option>
            <option value="Kazakhstan">Kazakhstan</option>
          </select>
          {formik.touched.country && formik.errors.country && (
            <div style={{ color: "red" }}>{formik.errors.country}</div>
          )}
        </div>

        {/* Optional fields */}
        <div>
          <label>Phone</label>
          <input type="text" {...formik.getFieldProps("phone")} />
        </div>

        <div>
          <label>Education</label>
          <select {...formik.getFieldProps("education")}>
            <option value="">Select education</option>
            <option value="School">School</option>
            <option value="College">College</option>
            <option value="University">University</option>
          </select>
        </div>

        <div>
          <label>Address</label>
          <textarea {...formik.getFieldProps("address")} />
        </div>

        <div>
          <label>State</label>
          <input type="text" {...formik.getFieldProps("state")} />
        </div>

        <div>
          <label>Zip Code</label>
          <input type="number" {...formik.getFieldProps("zip")} />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseApplicationForm;
