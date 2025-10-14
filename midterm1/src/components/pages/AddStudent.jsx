
import React from "react";
import {formik, form, errorsmassage,} from "formik";
import * as Yup from "yup";
import { useNavigate} from "react-rout-dom"
import { useEffect,useState } from "react";

export default function addstudent () {
    const Navigate = useNavigate ();
    const [student, setStudent] = useState([]);

useEffect(() =>

export default function AddStudent() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(saved);
  }, []);

  const schema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Required"),
    group: Yup.string().required("Required"),
    grade: Yup.number().min(0).max(100).required("Required"),
  });

  return (
    <div>
      <h2>Add Student</h2>

      <Formik
        initialValues={{ name: "", group: "", grade: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          const updated = [...students, values];
          localStorage.setItem("students", JSON.stringify(updated));
          navigate("/students");
        }}
      >
        <Form className="flex flex-col gap-2">
          <label>Name:</label>
          <Field name="name" />
          <ErrorMessage name="name" ="div" className="text-red-500" />

          <label>Group:</label>
          <Field name="group" />
          <ErrorMessage name="group" component="div" className="text-red-500" />

          <label>Grade:</label>
          <Field name="grade" type="number" />
          <ErrorMessage name="grade" component="div" className="text-red-500" />

          <button type="submit">Add Student</button>
        </Form>
      </Formik>
    </div>
  );
}
