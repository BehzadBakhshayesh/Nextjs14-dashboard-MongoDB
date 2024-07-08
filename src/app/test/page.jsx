import React from "react";

const handleForm = async (formData) => {
  "use server";
  console.log("Hello Server Action", formData);
  console.log("username", formData.get("username"));
};

const page = () => {
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
