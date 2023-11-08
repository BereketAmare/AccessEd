import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


function PetitionForm() {
  const [name, setname] = useState('')
  const [hometown, sethometown] = useState('')
  const [email, setemail] = useState('')

  const [array, setarray] = useState([])

  const handleChangename = (event) => {
    setname(event.target.value)
  }
  const handleChangehometown = (event) => {
    sethometown(event.target.value)
  }
  const handleChangeemail = (event) => {
    setemail(event.target.value)
  }

  useEffect(() => {

    // Fetch data from an API or another source
    axios.get('http://localhost:4000/gettopfive')
      .then((response) => {
        // Handle the fetched data, e.g., set it in state
        setarray(response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error fetching data:', error);
      });
  }, []); // Th



  const postForm = async (e) => {
    e.preventDefault()
    try {
      const postData = {
        "name" : name,
        "hometown" : hometown,
        "email": email
      }

      const response = await axios.post('http://localhost:4000/createsupporter', postData);

      const arr = await axios.get('http://localhost:4000/gettopfive');
      setarray(arr.data);
      console.log(arr.data)

    } catch (error) {
      console.error('Error:', error);
    }


  }

  return (
    <div className="flex justify-center bg-gray-100 ">
    <div className="bg-gray-100 p-4">
      {array.map((support, index) => (
        <div className="signatures mb-4">
        <p>🖊️ {support.name} from {support.hometown} supports this.</p>
      </div>

      ))}

      {/* Sign Petition Form */}
      <form id="sign-petition" className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleChangename}
        />
        <label htmlFor="hometown" className="block mt-2 mb-2">
          Hometown:
        </label>
        <input
          type="text"
          id="hometown"
          name="hometown"
          value2={hometown}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleChangehometown}
        />
        <label htmlFor="email" className="block mt-2 mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleChangeemail}
        />
      </form>

      {/* Sign Now Button */}
      <button
        id="sign-now-button"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        onClick={postForm}
      >
        Sign Now
      </button>

    </div>
    </div>
  );
}

export default PetitionForm;
