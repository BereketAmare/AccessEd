import React from 'react';

function PetitionForm() {
  return (
    <div className="flex justify-center bg-gray-100 ">
    <div className="bg-gray-100 p-4">
      <div className="signatures mb-4">
        <p>🖊️ DJ from Brooklyn supports this.</p>
        <p>🖊️ Amy from Queens supports this.</p>
        <p>🖊️ Teresa from Harlem supports this.</p>
      </div>

      {/* Sign Petition Form */}
      <form id="sign-petition" className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <label htmlFor="hometown" className="block mt-2 mb-2">
          Hometown:
        </label>
        <input
          type="text"
          id="hometown"
          name="hometown"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <label htmlFor="email" className="block mt-2 mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </form>

      {/* Sign Now Button */}
      <button
        id="sign-now-button"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Sign Now
      </button>
    </div>
    </div>
  );
}

export default PetitionForm;
