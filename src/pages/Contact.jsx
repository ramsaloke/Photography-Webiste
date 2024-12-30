import React from "react";
import { toast } from "react-toastify";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "90c968a1-2cfc-4875-b2e8-1462a97cddb6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
   toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };

  return (
    <div className="text-center p-6 py-10 lg:px-20 text-black w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-1 under font-light">With US</span></h1>
      <p className="text-center text-gray-500 mb-2 max-w-80 mx-auto">Ready to create memories? Let&apos;s Contact Us without any Hesitation.</p> 
      
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">Your Name
          <input className="w-full border border-gray-300 rounded py-3 px-4 mt-1 " type="text" name='Name' placeholder="Your Name" required />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">Your Email
          <input className="w-full border border-gray-300 rounded py-3 px-4 mt-1 " type="email" name='Email' placeholder="Email" required />
          </div>
        </div>
        <div className="my-6 text-left">
         <h2 className="font-semibold">Message</h2>  <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>

        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result ? result : "Send Message"}</button>
      </form>
      </div>
  )
}

export default Contact