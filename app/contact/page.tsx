"use client";
import { useState } from "react";
import jsPDF from "jspdf"; // install with: npm install jspdf

export default function SocietySurvey() {
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<"en" | "tr" | "ar">("en");

  const translations = {
    en: {
      title: "Society Survey Form",
      thankYou: "✅ Thank you for your feedback!",
      intro: "Please share your views about maintenance charges, yearly budget, and community facilities.",
      name: "Full Name",
      flat: "Flat / Apartment Number",
      email: "Email",
      phone: "Cell Phone Number",
      trc: "TRC Number",
      submit: "Submit Survey",
      comments: "Other Suggestions or Comments",
      maintenance: "Maintenance Charges",
      budget: "Yearly Budget",
      governance: "Governance & Participation",
      facilities: "Community Facilities",
    },
    tr: {
      title: "Site Anket Formu",
      thankYou: "✅ Geri bildiriminiz için teşekkürler!",
      intro: "Aidat, yıllık bütçe ve sosyal tesisler hakkındaki görüşlerinizi paylaşınız.",
      name: "Ad Soyad",
      flat: "Daire Numarası",
      email: "E-posta",
      phone: "Cep Telefonu",
      trc: "TRC Numarası",
      submit: "Anketi Gönder",
      comments: "Diğer Öneriler veya Yorumlar",
      maintenance: "Aidat Ücretleri",
      budget: "Yıllık Bütçe",
      governance: "Yönetim ve Katılım",
      facilities: "Sosyal Tesisler",
    },
    ar: {
      title: "نموذج استبيان المجتمع",
      thankYou: "✅ شكراً لملاحظاتك!",
      intro: "يرجى مشاركة آرائك حول رسوم الصيانة والميزانية السنوية والمرافق المجتمعية.",
      name: "الاسم الكامل",
      flat: "رقم الشقة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف المحمول",
      trc: "رقم TRC",
      submit: "إرسال الاستبيان",
      comments: "اقتراحات أو تعليقات أخرى",
      maintenance: "رسوم الصيانة",
      budget: "الميزانية السنوية",
      governance: "الحوكمة والمشاركة",
      facilities: "المرافق المجتمعية",
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    setResponses(data);
    setSubmitted(true);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(t.thankYou, 10, 10);
    let y = 20;
    Object.entries(responses).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 10, y);
      y += 10;
    });
    doc.save("survey-summary.pdf");
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6 py-10">
        <h1 className="text-3xl font-bold text-green-800 mb-4">{t.thankYou}</h1>
        <p className="text-gray-700 text-lg">{t.intro}</p>
        <button
          onClick={downloadPDF}
          className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          📄 Download PDF Summary
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-10">
      {/* Language Selector */}
      <div className="mb-4">
        <label className="mr-2 font-bold">🌐 Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "tr" | "ar")}
          className="border px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <h1 className="text-4xl font-bold text-green-900 mb-4">{t.title}</h1>
      <p className="text-gray-800 mb-6 text-lg">{t.intro}</p>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Resident Info */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.name}</legend>
          <input type="text" name="name" required className="w-full border px-3 py-2 rounded" placeholder={t.name} />

          <label className="block text-black font-semibold mt-2">{t.flat}</label>
          <input type="text" name="flat" required className="w-full border px-3 py-2 rounded" />

          <label className="block text-black font-semibold mt-2">{t.email}</label>
          <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />

          <label className="block text-black font-semibold mt-2">{t.phone}</label>
          <input type="tel" name="cellPhone" required className="w-full border px-3 py-2 rounded" />

          <label className="block text-black font-semibold mt-2">{t.trc}</label>
          <input type="text" name="trcNumber" required className="w-full border px-3 py-2 rounded" />
        </fieldset>

        {/* Maintenance Charges */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.maintenance}</legend>
          {["Very Satisfied","Satisfied","Neutral","Unsatisfied","Very Unsatisfied"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="maintenance" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Budget */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.budget}</legend>
          {["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"].map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="budget" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Governance */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.governance}</legend>
          <label className="block text-black font-bold">
            <input type="radio" name="invitedMeeting" value="Yes" className="mr-2" required /> Yes
          </label>
          <label className="block text-black font-bold">
            <input type="radio" name="invitedMeeting" value="No" className="mr-2" /> No
          </label>
        </fieldset>

        {/* Facilities */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.facilities}</legend>
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
        <label className="block text-black font-semibold">{t.comments}</label>
        <textarea
          name="comments"
          rows={4}
          className="w-full border px-3 py-2 rounded"
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800"
        >
          {t.submit}
        </button>
      </form>
    </main>
  );
}


