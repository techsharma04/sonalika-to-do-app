import "./../styles/OverdueTasks.css"
import { Formik, Form, Field } from "formik";

function CompletedTasks() {
    return(
        <div className="container">
            <h2>Completed</h2>
            <div className="fields">
                <Formik className="fields">
                    <Form className="form-fields">
                        <Field name="" type="checkbox" checked className="check"/>
                        <h3>Finished Task</h3>
                    </Form>
                </Formik>
            </div>
            
        </div>
    )
}

export default CompletedTasks;