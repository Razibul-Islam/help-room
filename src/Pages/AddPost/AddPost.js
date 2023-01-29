import React from "react";

const AddPost = () => {
  const submit = (e) => {
    e.preventDefault();
    const Title = e.target.Title.value;
    const Name = e.target.Name.value;
    const Description = e.target.Description.value;

    const data = { Title, Name, Description };
  };

  return (
    <form onSubmit={submit}>
      <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
        <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
            ADD POST
          </h1>
          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="title" className="text-lx font-serif">
                Title:
              </label>
              <input
                type="text"
                placeholder="Title"
                name="Title"
                id="title"
                className="ml-2 w-full outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="name" className="text-lx font-serif">
                Name:
              </label>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                id="name"
                className="ml-2 w-full outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>

            <div className="file_upload w-full p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
              <svg
                className="text-indigo-500 w-24 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="input_field flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    accept="image/*"
                    multiple
                  />
                  <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                    Select Photo
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-lg font-serif"
              >
                Description:
              </label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                name="Description"
                placeholder="write here.."
                className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>

            <input
              type="submit"
              className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
              value="ADD POST"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
