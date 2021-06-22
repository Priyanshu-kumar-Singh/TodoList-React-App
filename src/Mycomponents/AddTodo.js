import React,{ useState} from 'react';

export const AddTodo = (props) => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const[li,setLi] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description Cannot be blank");
        }else{
            props.addTodo(title,desc,li);
            setTitle("");
            setDesc("");
            setLi("");
        }
    }
    return (
        <div className = "container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" class="form-label">Todo Title</label>
                    <input type="text" value= {title} onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="desc" class="form-label">Todo Description</label>
                        <input type="text" value = {desc} onChange = {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <div className="mb-3">
                        <label htmlFor="link" class="form-label">Link</label>
                        <input type="url" value = {li} onChange = {(e)=>{setLi(e.target.value)}} className="form-control" id="link"/>
                </div>
                <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
