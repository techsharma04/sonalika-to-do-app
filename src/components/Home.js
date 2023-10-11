import "./../styles/Home.css";
import Header from './Header'
import Tasks from './Tasks'
import Overdue from './OverdueTasks'
import CompletedTasks from "./CompletedTasks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useDispatch} from 'react-redux'
import { addTask } from './../reducers/tasksSlice'


function Home() {
    let { email } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState("");

    const handleChange = (e) => {
        setValues(e.target.value);
    }

    const  createTask = (e) => {
        e.preventDefault();
            dispatch(addTask(values));

    }

    const handleClick = (e) => {
        navigate(`/Newtask/${values}/${email}`, true);
    }

    return (
        <div className="main-container">
            <section className="main-section">
                {<Header email={email}/>}
                <h1>Todo App </h1>
                <div className="list-input">
                    <input type="text" name="tasktodo" id="list-input" maxLength="25" onChange={(handleChange)} value={values} placeholder="Add task todo" />
                    <button className="btn btn-add-task" type="button" onClick={createTask}>Create Task</button>
                </div>
                <div className="list-buttons">
                    <button className="btn btn-detailed" type="button" onClick={handleClick}>Create Detailed Task</button>

                </div>
                <ul className="list"></ul>
                <hr />
                {<Tasks />}
                <hr />
                {<Overdue />}
                <hr />
                {<CompletedTasks />}
            </section>


        </div>
    )

}

export default Home;