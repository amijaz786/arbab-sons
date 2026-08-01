"use client";
import { useState } from "react";
import jsPDF from "jspdf";

export default function SocietySurvey() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);
};

  type ExplanationKey =
  | "Disagree"
  | "Strongly Disagree"
  | "Unsatisfied"
  | "Very Unsatisfied"
  | "Neutral"
  | "Agree"
  | "Strongly Agree"
  | "Yes"
  | "No"
  | "Very Satisfied"
  | "1"
  | "5";

const explanations: Record<ExplanationKey, string> = {
  Disagree: "You are not satisfied",
  "Strongly Disagree": "You are very unsatisfied",
  Unsatisfied: "Not happy with the service",
  "Very Unsatisfied": "Extremely unhappy",
  Neutral: "Neither satisfied nor unsatisfied",
  Agree: "You are satisfied",
  "Strongly Agree": "You are very satisfied",
  Yes: "Positive response",
  No: "Negative response",
  "Very Satisfied": "Extremely happy",
  "1": "Lowest rating",
  "5": "Highest rating",
};



  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Society Survey Form - Response Summary", 20, 20);

    let y = 40;
    Object.entries(formData).forEach(([key, value]) => {
  const detail = explanations[value as ExplanationKey] || value;
  doc.text(`${key}: ${detail}`, 20, y);
  y += 10;
});

    doc.save("Survey_Response.pdf");
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6 py-10">
        <h1 className="text-3xl font-bold text-green-800 mb-4">✅ Thank you for your feedback!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your responses have been recorded. You can download a summary below.
        </p>
        <button
          onClick={downloadPDF}
          className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800"
        >
          Download PDF Summary
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Society Survey Form</h1>
      <p className="text-gray-800 mb-6 text-lg">
        Please share your views about maintenance charges, yearly budget, and community facilities.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Resident Info */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Resident Information</legend>

          <label className="block text-black font-semibold mt-2">Full Name</label>
          <input type="text" name="Full Name" onChange={handleChange} required className="w-full border px-3 py-2 rounded text-black placeholder-gray-400" placeholder="Enter your full name" />

          <label className="block text-black font-semibold mt-2">Flat / Apartment Number</label>
          <input type="text" name="Flat Number" onChange={handleChange} required className="w-full border px-3 py-2 rounded text-black placeholder-gray-400" placeholder="e.g. Block-Flat number" />

          <label className="block text-black font-semibold mt-2">Email</label>
          <input type="email" name="Email" onChange={handleChange} required className="w-full border px-3 py-2 rounded text-black placeholder-gray-400" placeholder="you@example.com" />

          <label className="block text-black font-semibold mt-2">Cell Phone Number</label>
          <input type="tel" name="Cell Phone" onChange={handleChange} pattern="[0-9]{10,15}" required className="w-full border px-3 py-2 rounded text-black placeholder-gray-400" placeholder="e.g. 5551234567" />

          <label className="block text-black font-semibold mt-2">TRC Number</label>
          <input type="text" name="TRC Number" onChange={handleChange} pattern="[0-9]{11}" required className="w-full border px-3 py-2 rounded text-black placeholder-gray-400" placeholder="11-digit TRC number" />
        </fieldset>

        {/* Maintenance Charges */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Maintenance Charges</legend>
          <p className="text-black font-semibold mb-2">How satisfied are you with current maintenance charges?</p>
          {["Very Satisfied","Satisfied","Neutral","Unsatisfied","Very Unsatisfied"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="Maintenance Charges" value={opt} onChange={handleChange} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Budget */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Yearly Budget</legend>
          <p className="text-black font-semibold mb-2">Do you agree with the yearly budget allocation?</p>
          {["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="Yearly Budget" value={opt} onChange={handleChange} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Governance */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Governance & Participation</legend>

          <p className="text-black font-semibold">Have you ever been invited for a meeting?</p>
          <label className="block text-black font-bold">
            <input type="radio" name="Invited Meeting" value="Yes" onChange={handleChange} className="mr-2" required /> Yes
          </label>
          <label className="block text-black font-bold">
            <input type="radio" name="Invited Meeting" value="No" onChange={handleChange} className="mr-2" /> No
          </label>

          <p className="text-black font-semibold mt-3">Have you voted for the selection of management?</p>
          <label className="block text-black font-bold">
            <input type="radio" name="Voted Management" value="Yes" onChange={handleChange} className="mr-2" required /> Yes
          </label>
          <label className="block text-black font-bold">
            <input type="radio" name="Voted Management" value="No" onChange={handleChange} className="mr-2" /> No
          </label>

          <p className="text-black font-semibold mt-3">Are you satisfied with the water bill charges?</p>
          {["Very Satisfied","Satisfied","Neutral","Unsatisfied","Very Unsatisfied"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="Water Charges" value={opt} onChange={handleChange} className="mr-2" required /> {opt}
            </label>
          ))}

          <p className="text-black font-semibold mt-3">Do you agree with the current management to continue?</p>
          {["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="Continue Management" value={opt} onChange={handleChange} className="mr-2" required /> {opt}
            </label>
          ))}
	</fieldset>

        {/* Facilities with Star Ratings */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Community Facilities</legend>
          {["Security Services","Cleanliness","Parking Facilities"].map(facility => (
            <div key={facility} className="mb-4">
              <p className="text-black font-semibold">{facility}</p>
              {[1,2,3,4,5].map(star => (
                <label key={star} className="mr-2 text-yellow-500 font-bold">
                  <input type="radio" name={facility} value={star} onChange={handleChange} className="hidden" required /> ⭐
                </label>
              ))}
            </div>
          ))}
       
<textarea
  name="Comments"
  onChange={handleChange}
  rows={4}
  className="w-full border px-3 py-2"
>
  {/* optional default text inside */}
</textarea>

        {/* Submit */}
        <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800">
          Submit Survey
        </button>
      </form>
    </main>
  );
}

