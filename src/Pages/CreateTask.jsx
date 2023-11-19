import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { test } from "../Reducers/counterSlice";
function CreateTask() {
  const dispatch = useDispatch();
  const schemea = Yup.object().shape({
    task: Yup.string()
      .min(3, "Minimum 3 letters.")
      .required("Task is required"),
    deadline: Yup.date().required("Deadline is required"),
    description: Yup.string(),
    priority: Yup.boolean(),
    type: Yup.string(),
    tags: Yup.string(),
    image: Yup.string(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "password should have 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]+$/,
        "Password must include capital,small ,number and special characters"
      ),
  });
  const initialValues = {
    task: "",
    deadline: "",
    description: "",
    priority: false,
    tags: "",
    image: "",
    type: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(test(values));
  };
  return (
    <div className="form-div">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schemea}>
        <Form>
          <div className="content">
            <label htmlFor="task">Tasks</label>
            <Field type="text" name="task" />
            <ErrorMessage name="task" />
          </div>
          <div className="content">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <div className="content">
            <label htmlFor="deadline">Deadline</label>
            <Field type="datetime-local" name="deadline" />
            <ErrorMessage name="deadline" />
          </div>
          <div className="content">
            <label htmlFor="description">Description</label>
            <Field as="textarea" name="description" />
            <ErrorMessage name="description" />
          </div>
          <div className="content">
            <label htmlFor="priority">Priority</label>
            <Field type="checkbox" name="priority" />
            <ErrorMessage name="priority" />
          </div>
          <div className="content">
            <label htmlFor="tags">Tags</label>
            <Field as="select" name="tags">
              <option value="">Select a tag</option>
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </Field>
            <ErrorMessage name="tags" />
          </div>
          <div className="content">
            <label htmlFor="type">Type</label>
            <div>
              <Field type="radio" name="type" value="overdue-task" />
              <label>Overdue task</label>
            </div>
            <div>
              <Field type="radio" name="type" value="task-with-tag" />
              <label>Task with tags</label>
            </div>
            <div>
              <Field type="radio" name="type" value="task-with-deadline" />
              <label>Task with deadline</label>
            </div>
          </div>
          <div className="content">
            <label htmlFor="image">Image</label>
            <Field type="file" name="image" />
            <ErrorMessage name="image" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateTask;
