import "./../styles/OverdueTasks.css"
import { Formik, Form, Field } from "formik";

function OverdueTasks() {
    return(
        <div className="container">
            <h2>Overdue</h2>
            <div className="fields">
                <Formik className="fields">
                    <Form className="form-fields">
                        <Field name="" type="checkbox" className="check"/>
                        <h3>Overdue Tasks</h3>
                    </Form>
                </Formik>
            </div>
            <hr className="horizontal"/>
            <div className="fields">
                <Formik className="fields">
                    <Form className="form-fields">
                        <Field name="" type="checkbox" className="check"/>
                        <h3>Tasks with tags</h3>
                    </Form>
                </Formik>
                <Formik className="fields">
                    <Form className="form-fields">
                        <Field name="" type="checkbox" className="check"/>
                        <h3>Task with a deadline</h3>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default OverdueTasks;