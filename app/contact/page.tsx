"use client";
import { useState } from "react";
import jsPDF from "jspdf"; // install with: npm install jspdf

export default function SocietySurvey() {
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<"en" | "tr" | "ar">("en");
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const translations = {
    en: {
      title: "Özyurtlar N Towers Site Survey Form",
      thankYou: "✅ Thank you for your feedback!",
      intro: "Please share your views about maintenance charges, yearly budget, and community facilities.",
      name: "Full Name",
      namePlaceholder: "e.g. John Doe",
      flat: "Flat / Apartment Number",
      flatPlaceholder: "e.g. Apartment 12B",
      email: "Email",
      emailPlaceholder: "e.g. user@example.com",
      phone: "Cell Phone Number",
      phonePlaceholder: "e.g. 5551234567",
      trc: "TRC Number",
      trcPlaceholder: "11-digit TRC number",
      submit: "Submit Survey",
      comments: "Other Suggestions or Comments",
      maintenance: "Maintenance Charges",
      maintenanceOptions: [
      "Very Satisfied",
      "Satisfied",
      "Neutral",
      "Unsatisfied",
      "Very Unsatisfied",
    ],
      budget: "Yearly Budget",
      budgetOptions: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
      governance: "Governance & Participation",
      yesNo: ["Yes", "No"],
      facilities: "Community Facilities",
      facilityItems: ["Security Services", "Cleanliness", "Parking Facilities"],
      pdfLabels: {
      name: "Full Name",
      flat: "Flat / Apartment Number",
      email: "Email",
      cellPhone: "Cell Phone Number",
      trcNumber: "TRC Number",
      maintenance: "Maintenance Charges",
      budget: "Yearly Budget",
      invitedMeeting: "Invited to Meeting",
      facilities: "Community Facilities",
      "Security Services": "Security Services",
      "Cleanliness": "Cleanliness",
      "Parking Facilities": "Parking Facilities",
      comments: "Other Suggestions or Comments"
    }

    },
    tr: {
      title: "Özyurtlar N Towers Sitesi Anket Formu",
      thankYou: "✅ Geri bildiriminiz için teşekkürler!",
      intro: "Aidat, yıllık bütçe ve sosyal tesisler hakkındaki görüşlerinizi paylaşınız.",
      name: "Ad Soyad",
      namePlaceholder: "örn. Ahmet Yılmaz",
      flat: "Daire Numarası",
      flatPlaceholder: "örn. Daire 12B",
      email: "E-posta",
      emailPlaceholder: "örn. kullanici@eposta.com",
      phone: "Cep Telefonu",
      phonePlaceholder: "örn. 5551234567",
      trc: "TRC Numarası",
      trcPlaceholder: "11 haneli TRC numarası",
      submit: "Anketi Gönder",
      comments: "Diğer Öneriler veya Yorumlar",
      maintenance: "Aidat Ücretleri",
       maintenanceOptions: [
      "Çok Memnun",
      "Memnun",
      "Nötr",
      "Memnun Değil",
      "Hiç Memnun Değil",
    ],
      budget: "Yıllık Bütçe",
      budgetOptions: [
      "Kesinlikle Katılıyorum",
      "Katılıyorum",
      "Nötr",
      "Katılmıyorum",
      "Kesinlikle Katılmıyorum",
    ],
      governance: "Yönetim ve Katılım",
      yesNo: ["Evet", "Hayır"],
      facilities: "Sosyal Tesisler",
      facilityItems: ["Güvenlik Hizmetleri", "Temizlik", "Otopark İmkanları"],
      pdfLabels: {
      name: "Ad Soyad",
      flat: "Daire Numarası",
      email: "E-posta",
      cellPhone: "Cep Telefonu",
      trcNumber: "TRC Numarası",
      maintenance: "Aidat Ücretleri",
      budget: "Yıllık Bütçe",
      invitedMeeting: "Toplantıya Davet",
      facilities: "Sosyal Tesisler",
      "Security Services": "Güvenlik Hizmetleri",
      "Cleanliness": "Temizlik",
      "Parking Facilities": "Otopark İmkanları",
      comments: "Diğer Öneriler veya Yorumlar"
    }
    },
    ar: {
      title: "نموذج استبيان موقع أوزيورتلار إن تاورز",
      thankYou: "✅ شكراً لملاحظاتك!",
      intro: "يرجى مشاركة آرائك حول رسوم الصيانة والميزانية السنوية والمرافق المجتمعية.",
      name: "الاسم الكامل",
      namePlaceholder: "مثال: أحمد علي",
      flat: "رقم الشقة",
      flatPlaceholder: "مثال: شقة 12B",
      email: "البريد الإلكتروني",
      emailPlaceholder: "مثال: user@example.com",
      phone: "رقم الهاتف المحمول",
      phonePlaceholder: "مثال: 5551234567",
      trc: "رقم TRC",
      trcPlaceholder: "رقم TRC مكون من 11 خانة",
      submit: "إرسال الاستبيان",
      comments: "اقتراحات أو تعليقات أخرى",
      maintenance: "رسوم الصيانة",
    maintenanceOptions: [
         "راضٍ جدًا",
      "راضٍ",
      "محايد",
      "غير راضٍ",
      "غير راضٍ جدًا",
    ],
    budget: "الميزانية السنوية",
    budgetOptions: [
      "أوافق بشدة",
      "أوافق",
      "محايد",
      "لا أوافق",
      "لا أوافق بشدة",
    ],
    governance: "الحوكمة والمشاركة",
    yesNo: ["نعم", "لا"],
    facilities: "المرافق المجتمعية",
    facilityItems: ["خدمات الأمن", "النظافة", "مرافق وقوف السيارات"],
    pdfLabels: {
      name: "الاسم الكامل",
      flat: "رقم الشقة",
      email: "البريد الإلكتروني",
      cellPhone: "رقم الهاتف المحمول",
      trcNumber: "رقم TRC",
      maintenance: "رسوم الصيانة",
      budget: "الميزانية السنوية",
      invitedMeeting: "دعوة للاجتماع",
      facilities: "المرافق المجتمعية",
      "Security Services": "خدمات الأمن",
      "Cleanliness": "النظافة",
      "Parking Facilities": "مرافق وقوف السيارات",
      comments: "اقتراحات أو تعليقات أخرى"
    }
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
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(translations[language].title, 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(translations[language].thankYou, 20, 35);

  let y = 50;
  const labels = translations[language].pdfLabels; // ✅ now defined

  Object.entries(responses).forEach(([key, value]) => {
    const label = labels[key] || key;
    doc.text(`${label}: ${value}`, 20, y);
    y += 10;
  });

  y += 20;
  doc.setFont("helvetica", "italic");
  doc.text("Resident Signature: ___________________________", 20, y);

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
          className="border px-3 py-2 rounded bg-white text-black"
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
          <input type="text" name="name" required className="w-full border px-3 py-2 rounded bg-white text-black placeholder-gray-500" placeholder={t.namePlaceholder} />

          <label className="block text-black font-semibold mt-2">{t.flat}</label>
          <input type="text" name="flat" required className="w-full border px-3 py-2 rounded bg-white text-black placeholder-gray-500" placeholder={t.flatPlaceholder} />

          <label className="block text-black font-semibold mt-2">{t.email}</label>
          <input type="email" name="email" required className="w-full border px-3 py-2 rounded bg-white text-black placeholder-gray-500" placeholder={t.emailPlaceholder} />

          <label className="block text-black font-semibold mt-2">{t.phone}</label>
          <input type="tel" name="cellPhone" required className="w-full border px-3 py-2 rounded bg-white text-black placeholder-gray-500" placeholder={t.phonePlaceholder} />

          <label className="block text-black font-semibold mt-2">{t.trc}</label>
          <input type="text" name="trcNumber" required className="w-full border px-3 py-2 rounded bg-white text-black placeholder-gray-500" placeholder={t.trcPlaceholder} />
        </fieldset>

        {/* Maintenance Charges */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.maintenance}</legend>
          {t.maintenanceOptions.map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="maintenance" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Budget */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.budget}</legend>
          {t.budgetOptions.map(opt => (
            <label key={opt} className="block text-black font-bold">
              <input type="radio" name="budget" value={opt} className="mr-2" required /> {opt}
            </label>
          ))}
        </fieldset>

        {/* Governance */}
<fieldset className="border p-4 rounded">
  <legend className="text-green-800 font-bold text-lg">{t.governance}</legend>
  {t.yesNo.map(opt => (
    <label key={opt} className="block text-black font-bold">
      <input type="radio" name="invitedMeeting" value={opt} className="mr-2" required /> {opt}
    </label>
  ))}

        </fieldset>

        {/* Facilities */}
        <fieldset className="border p-4 rounded">
          <legend className="text-green-800 font-bold text-lg">{t.facilities}</legend>
          {t.facilityItems.map(facility => (
  <div key={facility} className="mb-4">
    <p className="text-black font-semibold">{facility}</p>
    {[1,2,3,4,5].map(num => (
      <button
        key={num}
        type="button"
        onClick={() => setRatings({ ...ratings, [facility]: num })}
        className={`mx-1 px-3 py-1 rounded ${
          ratings[facility] === num ? "bg-green-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {num}
      </button>
    ))}
    <input type="hidden" name={facility} value={ratings[facility] || ""} required />
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


