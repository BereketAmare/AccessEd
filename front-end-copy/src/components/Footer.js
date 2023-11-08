import React from 'react';

function Footer() {
  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-semibold mb-4">Recent News</h2>

      <a
        href="https://www.educaccess.org/about-us"
        className="block hover:underline"
      >
        <article className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            Education Access, Inc
          </h3>
          <p className="text-gray-700">
            The mission of Education: Access, Inc. is to provide scholarships,
            mentorship, and support for disadvantaged girls in developing
            countries, with the aim of contributing to their overall development
            and education.
          </p>
        </article>
      </a>

      {/* ... other React components or content here */}

      {/* Modal */}
      <div id="thanks-modal" className="modal">
        {/* Modal content */}
        <div className="modal-content flex">
          <div id="modal-text-container" className="w-3/5 p-4">
            {/* Text here */}
            <p id="thanks-modal-content" className="text-lg font-semibold">
              Your placeholder text here
            </p>
            {/* Button here (stretch feature) */}
          </div>
          {/* Image here */}
          <img
            src="images/image_2023-03-04_144030648.png"
            alt="Placeholder Image"
            className="w-2/5"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
