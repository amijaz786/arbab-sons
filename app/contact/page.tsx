"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function SocietySurvey() {
  const [state, handleSubmit] = useForm("mgogjojz"); // your Formspree form ID
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Society Survey Form",
      intro: "Please share your views about maintenance charges, yearly budget, and community facilities.",
      name: "Full Name",
      flat: "Flat / Apartment Number",
      email: "Email",
      maintenance: "How satisfied are you with current maintenance charges?",
      maintenanceOptions: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"],
      budget: "Do you agree with the yearly budget allocation?",
      budgetOptions: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      security: "Security Services",
      cleanliness: "Cleanliness",
      parking: "Parking Facilities",
      facilityOptions: ["Excellent", "Good", "Neutral", "Poor"],
      comments: "Other Suggestions or Comments",
      submit: "Submit Survey",
      thanks: "✅ Thank you for your feedback!",
    },
    tr: {
      title: "Site Anket Formu",
      intro: "Lütfen aidat ücretleri, yıllık bütçe ve ortak tesisler hakkında görüşlerinizi paylaşın.",
      name: "Ad Soyad",
      flat: "Daire Numarası",
      email: "E-posta",
      maintenance: "Mevcut aidat ücretlerinden ne kadar memnunsunuz?",
      maintenanceOptions: ["Çok Memnun", "Memnun", "Nötr", "Memnun Değil", "Hiç Memnun Değil"],
      budget: "Yıllık bütçe tahsisini onaylıyor musunuz?",
      budgetOptions: ["Kesinlikle Katılıyorum", "Katılıyorum", "Nötr", "Katılmıyorum", "Kesinlikle Katılmıyorum"],
      security: "Güvenlik Hizmetleri",
      cleanliness: "Temizlik",
      parking: "Otopark Hizmetleri",
      facilityOptions: ["Mükemmel", "İyi", "Nötr", "Kötü"],
      comments: "Diğer Öneriler veya Yorumlar",
      submit: "Anketi Gönder",
      thanks: "✅ Geri bildiriminiz için teşekkürler!",
    },
    ar: {
      title: "نموذج استبيان المجتمع",
      intro: "يرجى مشاركة آرائكم حول رسوم الصيانة والميزانية السنوية والمرافق العامة.",
      name: "الاسم الكامل",
      flat: "رقم الشقة",
      email: "البريد الإلكتروني",
      maintenance: "هل أنت راضٍ عن رسوم الصيانة الحالية؟",
      maintenanceOptions: ["راضٍ جدًا", "راضٍ", "محايد", "غير راضٍ", "غير راضٍ جدًا"],
      budget: "هل توافق على تخصيص الميزانية السنوية؟",
      budgetOptions: ["أوافق بشدة", "أوافق", "محايد", "لا أوافق", "لا أوافق بشدة"],
      security: "خدمات الأمن",
      cleanliness: "النظافة",
      parking: "مرافق المواقف",
      facilityOptions: ["ممتاز", "جيد", "محايد", "سيئ"],
      comments: "اقتراحات أو تعليقات أخرى",
      submit: "إرسال الاستبيان",
      thanks: "✅ شكراً لملاحظاتكم!",
    },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-100 px-6">
      {/* Language Selector */}
      <div className="mb-4">
        <label className="text-gray-900 font-medium mr-2">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-600 rounded px-2 py-1 text-gray-900 bg-white font-semibold"
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <h1 className="text-4xl font-bold text-green-900 mb-6">{translations[language].title}</h1>
      <p className="text-gray-800 mb-6">{translations[language].intro}</p>

      <section className="w-full max-w-3xl bg-white border border-green-400 shadow-lg rounded-lg p-6">
        {state.succeeded ? (
          <p className="text-green-700 font-semibold">{translations[language].thanks}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Resident Information */}
            <fieldset className="border border-gray-500 p-4 rounded">
              <legend className="font-semibold text-green-800">{translations[language].name}</legend>

              <label htmlFor="name" className="text-gray-900 font-medium">{translations[language].name}:</label>
              <input id="name" type="text" name="name" required className="border border-gray-600 rounded px-2 py-1 mb-2 text-gray-900 bg-white focus:border-green-700 focus:ring-green-700" />

              <label htmlFor="flat" className="text-gray-900 font-medium">{translations[language].flat}:</label>
              <input id="flat" type="text" name="flat" required className="border border-gray-600 rounded px-2 py-1 mb-2 text-gray-900 bg-white focus:border-green-700 focus:ring-green-700" />

              <label htmlFor="email" className="text-gray-900 font-medium">{translations[language].email}:</label>
              <input id="email" type="email" name="email" required className="border border-gray-600 rounded px-2 py-1 text-gray-900 bg-white focus:border-green-700 focus:ring-green-700" />
              <ValidationError field="email" errors={state.errors} />
            </fieldset>

            {/* Maintenance Charges Satisfaction */}
            <fieldset className="border border-gray-500 p-4 rounded">
              <legend className="font-semibold text-green-800">{translations[language].maintenance}</legend>
              <select id="maintenance" name="maintenance" defaultValue="neutral" className="border border-gray-600 rounded px-2 py-1 text-gray-900 bg-white font-semibold focus:border-green-700 focus:ring-green-700">
                {translations[language].maintenanceOptions.map((opt, idx) => (
                  <option key={idx} value={opt.toLowerCase()}>{opt}</option>
                ))}
              </select>
            </fieldset>

            {/* Yearly Budget Opinion */}
            <fieldset className="border border-gray-500 p-4 rounded">
              <legend className="font-semibold text-green-800">{translations[language].budget}</legend>
              <select id="budget" name="budget" defaultValue="neutral" className="border border-gray-600 rounded px-2 py-1 text-gray-900 bg-white font-semibold focus:border-green-700 focus:ring-green-700">
                {translations[language].budgetOptions.map((opt, idx) => (
                  <option key={idx} value={opt.toLowerCase()}>{opt}</option>
                ))}
              </select>
            </fieldset>

{/* Community Facilities */}
<fieldset className="border border-gray-500 p-4 rounded">
  <legend className="font-semibold text-green-800">Community Facilities</legend>

  <label htmlFor="security" className="text-gray-900 font-medium">
    {translations[language].security}:
  </label>
  <select
    id="security"
    name="security"
    defaultValue="neutral"
    className="border border-gray-600 rounded px-2 py-1 mb-2 text-gray-900 bg-white font-semibold focus:border-green-700 focus:ring-green-700"
  >
    {translations[language].facilityOptions.map((opt, idx) => (
      <option key={idx} value={opt.toLowerCase()}>{opt}</option>
    ))}
  </select>

  <label htmlFor="cleanliness" className="text-gray-900 font-medium">
    {translations[language].cleanliness}:
  </label>
  <select
    id="cleanliness"
    name="cleanliness"
    defaultValue="neutral"
    className="border border-gray-600 rounded px-2 py-1 mb-2 text-gray-900 bg-white font-semibold focus:border-green-700 focus:ring-green-700"
  >
    {translations[language].facilityOptions.map((opt, idx) => (
      <option key={idx} value={opt.toLowerCase()}>{opt}</option>
    ))}
  </select>

  <label htmlFor="parking" className="text-gray-900 font-medium">
    {translations[language].parking}:
  </label>
  <select
    id="parking"
    name="parking"
    defaultValue="neutral"
    className="border border-gray-600 rounded px-2 py-1 mb-2 text-gray-900 bg-white font-semibold focus:border-green-700 focus:ring-green-700"
  >
    {translations[language].facilityOptions.map((opt, idx) => (
      <option key={idx} value={opt.toLowerCase()}>{opt}</option>
    ))}
  </select>
</fieldset>
            

{/* Additional Comments */}
<label htmlFor="comments" className="text-gray-900 font-medium">
  {translations[language].comments}:
</label>
<textarea
  id="comments"
  name="comments"
  rows="5"
  className="border border-gray-600 rounded px-2 py-1 text-gray-900 bg-white focus:border-green-700 focus:ring-green-700"
></textarea>
<ValidationError field="comments" errors={state.errors} />

{/* Submit */}
<button
  type="submit"
  disabled={state.submitting}
  className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800 shadow-md"
>
  {state.submitting ? "Submitting..." : translations[language].submit}
</button>

          </form>
        )}
      </section>
    </main>
  );
}