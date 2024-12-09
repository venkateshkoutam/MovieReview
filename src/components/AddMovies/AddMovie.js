import { useState } from "react";

const AddMovie = ({closeform,getdata, formdata,adddata}) => {
    console.log("form data",formdata);
    
    const [data, setdata] = useState(formdata);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="form-overlay">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Movie Name:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        name="MovieName"
                        placeholder="Enter Movie Name"
                        value={data.MovieName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Movie Reviews:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        name="ReviewComments"
                        placeholder="Enter Comments"
                        value={data.ReviewComments}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-success float-end" type="submit" onClick={()=>adddata(data)}>
                    Save
                </button>
                <button className="btn btn-danger float-end" type="Close" onClick={closeform}>
                    Close
                </button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default AddMovie;
