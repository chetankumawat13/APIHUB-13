import React, { useState } from 'react'

const AddNewApi = () => {

    const [data, setData] = useState({
        "api_title": "",
        "api_description": "",
        "api_category": "",
        "api_img": ""

    })

    const handleData = (e) => {
        e.preventDefault();
        console.log("Form submitted", data);
        fetch("http://localhost:3000/apis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then((resData) => {
            console.log("Response from server:", resData);
            alert("API added successfully!");
            setData({
                "api_title": "",
                "api_description": "",
                "api_category": "",
                "api_img": ""
            });
        })
        .catch((error) => {
            console.error("Error adding API:", error);
            alert("Failed to add API. Please try again.");
        });
        

    }
    const handleDataChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
                <form onSubmit={handleData} className="bg-white p-6 rounded shadow-md w-1/3">
                        <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">API Title</h2>
                                <input name="api_title" onChange={handleDataChange} value={data.api_title} type="text" placeholder="Enter API Title" className="border border-gray-300 p-2 w-full rounded" />
                        </div>
                        <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">API Description</h2>
                                <input name="api_description" onChange={handleDataChange} value={data.api_description} type="text" placeholder='Enter API Description' className="border border-gray-300 p-2 w-full rounded" />
                        </div>
                        <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">Category</h2>
                                <input name="api_category" onChange={handleDataChange} value={data.api_category} type="text" placeholder='Enter Category' className="border border-gray-300 p-2 w-full rounded" />
                        </div>
                        <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">Placeholder Img</h2>
                                <input name="api_img" onChange={handleDataChange} value={data.api_img} type="text" placeholder='Enter Placeholder Img URL' className="border border-gray-300 p-2 w-full rounded" />
                        </div>
                        <div>
                                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
                        </div>
                </form>
        </div>
    )
}

export default AddNewApi
