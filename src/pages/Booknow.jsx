import React, { useState } from "react";

const Booknow = () => {
  const [result, setResult] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("Name");
    const location = formData.get("Location"); // Collecting city/village
    const option = formData.get("Option");

    if (!option) {
      setResult("Please select a service");
      return;
    }

    const message = `Hello, my name is ${name}. I am from ${location}, and I am interested in your ${option} service. Please contact me for further details.`;

    // WhatsApp link with the pre-filled message
    const whatsappLink = `https://wa.me/9866901723?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");

    setResult(""); // Reset the message
    event.target.reset();
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 text-black w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Book{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Now
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-6 max-w-80 mx-auto">
        Ready to create memories? Let&apos;s book your shoot with affordable
        prices.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your City/Village
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
              type="text"
              name="Location"
              placeholder="City/Village"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <h2 className="font-semibold">Select Service</h2>
          <select
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            name="Option"
            required
          >
            <option value="" disabled selected>
              Choose a service
            </option>
            <option value="Pre-wedding Shoot">Pre-wedding Shoot</option>
            <option value="Drone Shoot">Drone Shoot</option>
            <option value="Wedding Shoot">Wedding Shoot</option>
            <option value="Post-wedding Shoot">Post-wedding Shoot</option>
            <option value="Birthday Shoot">Birthday Shoot</option>
          </select>
        </div>

        <button
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          type="submit"
        >
          {result || "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Booknow;
