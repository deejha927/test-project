import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  task: Yup.string()
    .min(3, "It should have atleast 3 letters.")
    .required("Task is required"),
  deadline: Yup.date().required("Deadline is required"),
  description: Yup.string(),
  priority: Yup.boolean(),
  tags: Yup.string().required("Tags are required"),
  image: Yup.mixed().required("Image is required"),
  type: Yup.string().required("Type is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]+$/,
      "Password must include at least one letter, one digit, and one special character."
    )
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const initialValues = {
  task: "",
  deadline: "",
  description: "",
  priority: false,
  tags: "",
  image: "",
  password: "",
};

const TaskForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="form-div">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form>
          <div className="content">
            <label htmlFor="task">Task</label>
            <Field type="text" name="task" id="task" />
            <ErrorMessage name="task" component="div" />
          </div>

          <div className="content">
            <label htmlFor="deadline">Deadline</label>
            <Field type="datetime-local" name="deadline" id="deadline" />
            <ErrorMessage name="deadline" component="div" />
          </div>

          <div className="content">
            <label htmlFor="description">Description</label>
            <Field as="textarea" name="description" id="description" />
            <ErrorMessage name="description" component="div" />
          </div>

          <div className="content">
            <label htmlFor="priority">Priority</label>
            <Field type="checkbox" name="priority" id="priority" />
          </div>

          <div className="content">
            <label htmlFor="tags">Tags</label>
            <Field as="select" name="tags" id="tags">
              <option value="">Select a tag</option>
              <option value="Tag 1">Tag 1</option>
              <option value="Tag 2">Tag 2</option>
              <option value="Tag 3">Tag 3</option>
            </Field>
            <ErrorMessage name="tags" component="div" />
          </div>
          <div className="content">
            <label>Type</label>
            <div className="radio-button-div">
              <label>
                <Field type="radio" name="type" value="Overdue" /> Overdue Task
              </label>
              <label>
                <Field type="radio" name="type" value="Task-with-tag" /> Task
                with tags
              </label>
              <label>
                <Field type="radio" name="type" value="Task-with-deadline" />{" "}
                Task with deadline
              </label>
            </div>
            <ErrorMessage name="type" component="div" />
          </div>
          <div className="content">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div className="content">
            <label htmlFor="image">Image</label>
            <Field type="file" name="image" id="image" />
            <ErrorMessage name="image" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
