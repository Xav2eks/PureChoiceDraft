import { ShoppingBasket, Star, Mail } from "lucide-react";

const stats = [
  {
    label: "Total Products",
    value: "2,845",
    noteColor: "text-[#2E9F63]",
    Icon: ShoppingBasket,
  },
  {
    label: "Total Reviews",
    value: "48",
    noteColor: "text-[#DC3545]",
    Icon: Star,
  },
  {
    label: "Total Inquiries",
    value: "18",
    note: "3 inquiries today",
    noteColor: "text-[#8B8F86]",
    Icon: Mail,
  },
];

const inquiries = [
  {
    subject: "Ingredients Clarification",
    message: "How are zero-sugar sweeteners calculated in health scores?",
    by: "Sarah M.",
    date: "Oct 24, 2026",
    time: "02:15 PM",
  },
  {
    subject: "Outdated Product Label",
    message: "The image for Oat Harmony shows old nutritional facts.",
    by: "James K.",
    date: "Oct 24, 2026",
    time: "01:40 PM",
  },
  {
    subject: "Raw Organic Kombucha",
    message: "Are heavy metals tested in your organic supplements?",
    by: "Maria L.",
    date: "Oct 24, 2026",
    time: "11:05 AM",
  },
  {
    subject: "Artificial Sweetener E-951",
    message: "How does the system balance high protein vs high sodium?",
    by: "David R.",
    date: "Oct 23, 2026",
    time: "05:30 PM",
  },
  {
    subject: "Grass-Fed Greek Yogurt",
    message: "Will you be adding gluten-free badges to dairy items?",
    by: "Emily T.",
    date: "Oct 23, 2026",
    time: "09:12 AM",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold text-[#16281D]">
          Dashboard Overview
        </h1>
      </div>

      <div className="mb-1">
        <h2 className="text-2xl font-semibold text-[#16281D]">
          Welcome back, Admin
        </h2>
        <p className="text-sm text-[#8B9088] mt-1">
          Here is the current system wellness catalog summary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {stats.map(({ label, value, note, noteColor, Icon }) => (
          <div
            key={label}
            className="bg-white rounded-xl p-5 border border-[#ECE8DD] hover:shadow-md transition-shadow duration-150 cursor-default"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[#8B9088]">{label}</span>
              <span className="w-8 h-8 rounded-full bg-[#EAF6EF] flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#2E9F63]" />
              </span>
            </div>
            <p className="text-3xl font-bold text-[#16281D] mb-1">{value}</p>
            <p className={`text-xs ${noteColor}`}>{note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-5 mt-6">
        <div className="bg-white rounded-xl p-5 border border-[#ECE8DD]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#16281D]">
              Recent Customer Inquiries
            </h3>
            <button
              type="button"
              className="text-sm text-[#2E9F63] hover:text-[#1F6E42] active:text-[#164F30] cursor-pointer transition-colors duration-150"
            >
              View all audit trails
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[#8B9088] border-b border-[#ECE8DD]">
                <th className="font-medium pb-2 pr-4">Subject</th>
                <th className="font-medium pb-2 pr-4">Message/Inquiry</th>
                <th className="font-medium pb-2 pr-4">Submitted By</th>
                <th className="font-medium pb-2">Date and Time</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((row) => (
                <tr
                  key={row.subject}
                  className="border-b border-[#F1EEE5] last:border-0 hover:bg-[#FAF9F5] cursor-default transition-colors duration-150"
                >
                  <td className="py-3 pr-4 font-medium text-[#16281D] align-top">
                    {row.subject}
                  </td>
                  <td className="py-3 pr-4 text-[#6B7268] align-top max-w-[220px]">
                    {row.message}
                  </td>
                  <td className="py-3 pr-4 text-[#6B7268] align-top whitespace-nowrap">
                    {row.by}
                  </td>
                  <td className="py-3 text-[#6B7268] align-top whitespace-nowrap">
                    {row.date}
                    <br />
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#ECE8DD] h-fit">
          <h3 className="font-semibold text-[#16281D] mb-4">
            Quick Admin Operations
          </h3>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center gap-3 bg-[#EAF6EF] hover:bg-[#DDF0E5] active:bg-[#C9E7D6] rounded-lg px-4 py-3 text-left cursor-pointer transition-colors duration-150"
            >
              <span className="w-7 h-7 rounded-full bg-[#2E9F63] text-white flex items-center justify-center text-sm">
                +
              </span>
              <span className="text-sm font-medium text-[#16281D]">
                Add or Manage Products
              </span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 bg-[#F5F3EC] hover:bg-[#ECE8DD] active:bg-[#DFDACB] rounded-lg px-4 py-3 text-left cursor-pointer transition-colors duration-150"
            >
              <span className="w-7 h-7 rounded-full bg-[#16281D] text-white flex items-center justify-center text-xs">
                ≡
              </span>
              <span className="text-sm font-medium text-[#16281D]">
                Manage Inquiries
                <br />
                <span className="text-xs text-[#8B9088] font-normal">
                  View Customer Reviews
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
