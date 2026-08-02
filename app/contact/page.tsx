"use client";
import { useState } from "react";

export default function SocietySurvey() {
  const [submitted, setSubmitted] = useState(false);

  // ✅ Explicit type for form submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6 py-10">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          ✅ Thank you for your feedback!
        </h1>
        <p className="text-gray-700 text-lg">
          Your responses have been recorded. We appreciate your time and input in improving our community.
        </p>
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
          <input type="text" name="name" required className="w-full border px-3 py-2 rounded" />

          <label className="block text-black font-semibold mt-2">Flat / Apartment Number</label>
          <input type="text" name="flat" required className="w-full border px-3 py-2 rounded" />

          <label className="block text-black font-semibold mt-2">Email</label>
          <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />

          <label className="block text-black font-semibold mt-2">Cell Phone Number</label>
          <input
            type="tel"
            name="cellPhone"
            pattern="[0-9]{10,15}"
            placeholder="e.g. 5551234567"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <label className="block text-black font-semibold mt-2">TRC Number</label>
          <input
            type="text"
            name="trcNumber"
            pattern="[0-9]{11}"
            placeholder="11-digit TRC number"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </fieldset>

        {/* Maintenance Charges */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Maintenance Charges</legend>
          <p className="text-black font-semibold mb-2">How satisfied are you with current maintenance charges?</p>
          {["Very Satisfied","Satisfied","Neutral","Unsatisfied","Very Unsatisfied"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="maintenance" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Budget */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Yearly Budget</legend>
          <p className="text-black font-semibold mb-2">Do you agree with the yearly budget allocation?</p>
          {["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="budget" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Governance */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">Governance & Participation</legend>

          <p className="text-black font-semibold">Have you ever been invited for a meeting?</p>
          <label className="block text-black font-bold">
            <input type="radio" name="invitedMeeting" value="Yes" className="mr-2" required /> Yes
          </label>
          <label className="block text-black font-bold">
            <input type="radio" name="invitedMeeting" value="No" className="mr-2" /> No
          </label>

          <p className="text-black font-semibold mt-3">Have you voted for the selection of management?</p>
          <label className="block text-black font-bold">
            <input type="radio" name="votedManagement" value="Yes" className="mr-2" required /> Yes
          </label>
          <label className="block text-black font-bold">
            <input type="radio" name="votedManagement" value="No" className="mr-2" /> No
          </label>

          <p className="text-black font-semibold mt-3">Are you satisfied with the water bill charges?</p>
          {["Very Satisfied","Satisfied","Neutral","Unsatisfied","Very Unsatisfied"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="waterCharges" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}

          <p className="text-black font-semibold mt-3">Do you agree with the current management to continue?</p>
          {["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="continueManagement" value={opt} className="mr-2" required /> {opt}
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
                  <input type="radio" name={facility} value={star} className="hidden" required /> ⭐
                </label>
              ))}
            </div>
          ))}
        </fieldset>

        {/* Comments */}
        <label className="block text-black font-semibold">Other Suggestions or Comments</label>
        {/* ✅ rows must be number, not string */}
        <textarea name="comments" rows={4} className="w-full border px-3 py-2 rounded"></textarea>

        {/* Submit */}
        <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800">
          Submit Survey
        </button>
      </form>
    </main>
  );
}


