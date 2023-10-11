import './../styles/Newtask.css';
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Newtask() {
    let navigate = useNavigate();
   let { tasktodo,email } = useParams();
    const initialValues = {
        task: "",  
        deadline: "",         
        description: "",
        priority: false,
        tags: "", 
        image: ""
    };

    const handleSubmit = (values) => {
        console.log('Form values:', values);
       console.log('tasktodo:', tasktodo);
         console.log('email:', email);
       };
       const handleClick = (e) => {
        navigate(`/home/${email}`, true);
    }


    return (
        <div className="main">
            <div className="task-container">
                <h3 className='formik-h3'>CREATE TASK</h3>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className="formik-form">
                        <div className='formik-fields'>
                            <label>Task:</label>
                            <Field name="task" type="text" />
                        </div>
                        <div className='formik-fields'>
                            <label>Deadline:</label>
                            <Field name="deadline" type="text" />
                        </div>
                        <div className='formik-fields'>
                            <label>Description:</label>
                            <Field name="description" type="text" />
                        </div>
                        <div className='formik-checkbox'>
                            <label>Priority:</label>
                            <Field name="priority" type="checkbox" />
                        </div>
                        <div className='formik-select'>
                            <label>Tags:</label>
                            <Field name="tags" as="select">
                                <option>Home</option>
                                <option>Work</option>
                                <option>Important</option>
                            </Field>
                        </div>
                        <div className='formik-fields'>
                            <label>Image:</label>
                            <Field name="image" type="file" />
                        </div>
                        
                        <div className='formik-btn'>
                            <button className='formik-btn-create' type="submit" onClick={handleClick}>Create</button>
                            <Link to={`/home/${email}`}>
                                <button className='formik-btn-cancel'>Cancel</button>
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Newtask;
