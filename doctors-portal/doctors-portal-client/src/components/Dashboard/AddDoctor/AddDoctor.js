import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {

    const [info, setInfo] = React.useState({});
    const [file, setFile] = React.useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        // console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    console.log(info);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        // console.log(newFile);
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:9000/addDoctor', {
            method: 'POST',
            // headers: { 'content-type': 'application/json' },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;