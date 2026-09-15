"use client";

import { useState, FormEvent } from "react";

type Status = "Active" | "Draft";

type Product = {
  name: string;
  category: string;
  price: string;
  status: Status;
};

const initialProducts: Product[] = [
  {
    name: "Oat Harmony Sugar-Free",
    category: "Beverages",
    price: "$4.80",
    status: "Active",
  },
  {
    name: "Pure Ground Almond Butter",
    category: "Snacks",
    price: "$7.20",
    status: "Active",
  },
  {
    name: "Grass-Fed Greek Yogurt 0%",
    category: "Dairy",
    price: "$3.50",
    status: "Active",
  },
  {
    name: "Prebiotic Sparkling Soda",
    category: "Beverages",
    price: "$3.20",
    status: "Draft",
  },
  {
    name: "Vanilla Nitro Cold Brew",
    category: "Beverages",
    price: "$4.50",
    status: "Active",
  },
  {
    name: "Plant Protein Energy Block",
    category: "Supplements",
    price: "$2.90",
    status: "Draft",
  },
];

const categoryOptions = ["Beverages", "Snacks", "Dairy", "Supplements"];

function StatusBadge({ status }: { status: Status }) {
  const styles =
    status === "Active"
      ? "bg-[#E4F5EA] text-[#218838]"
      : "bg-[#FDF3D8] text-[#B7791F]";
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles}`}>
      {status}
    </span>
  );
}

function EditIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 20h4l10-10-4-4L4 16v4z" strokeLinejoin="round" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M5 7h14M9 7V5h6v2M6 7l1 13h10l1-13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  );
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState(categoryOptions[0]);
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState<Status>("Active");

  function resetForm() {
    setName("");
    setCategory(categoryOptions[0]);
    setPrice("");
    setStatus("Active");
  }

  function handleAddProduct(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !price.trim()) return;

    const formattedPrice = price.trim().startsWith("$")
      ? price.trim()
      : `$${price.trim()}`;

    setProducts((prev) => [
      { name: name.trim(), category, price: formattedPrice, status },
      ...prev,
    ]);

    resetForm();
    setIsModalOpen(false);
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold text-[#16281D]">
          ALL PURECHOICE PRODUCTS
        </h1>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2E9F63] hover:bg-[#278A55] active:bg-[#1F6E42] text-white text-sm font-medium px-4 py-2.5 rounded-lg cursor-pointer transition-colors duration-150"
        >
          + Add New Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#ECE8DD] p-5">
        <input
          type="text"
          placeholder="Search catalog index..."
          className="w-full max-w-xs border border-[#ECE8DD] rounded-lg px-3 py-2 text-sm text-[#16281D] placeholder:text-[#B0B5AA] outline-none focus:border-[#2E9F63] mb-5 cursor-text"
        />

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[#8B9088] border-b border-[#ECE8DD]">
              <th className="font-medium pb-3 pr-4">Thumbnail</th>
              <th className="font-medium pb-3 pr-4">Product Name</th>
              <th className="font-medium pb-3 pr-4">Category</th>
              <th className="font-medium pb-3 pr-4">Price</th>
              <th className="font-medium pb-3 pr-4">Status</th>
              <th className="font-medium pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr
                key={`${p.name}-${i}`}
                className="border-b border-[#F1EEE5] last:border-0 hover:bg-[#FAF9F5] cursor-default transition-colors duration-150"
              >
                <td className="py-3 pr-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EDEAE0]" />
                </td>
                <td className="py-3 pr-4 font-medium text-[#16281D]">
                  {p.name}
                </td>
                <td className="py-3 pr-4 text-[#6B7268]">{p.category}</td>
                <td className="py-3 pr-4 text-[#6B7268]">{p.price}</td>
                <td className="py-3 pr-4">
                  <StatusBadge status={p.status} />
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#6B7268] hover:bg-[#EAF6EF] hover:text-[#2E9F63] active:bg-[#DDF0E5] cursor-pointer transition-colors duration-150"
                    >
                      <EditIcon />
                    </button>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#DC3545] hover:bg-[#FDECEC] active:bg-[#FAD8D8] cursor-pointer transition-colors duration-150"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-5 text-sm text-[#8B9088]">
          <span>
            Showing 1-{products.length} of {18 + products.length} items
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg border border-[#ECE8DD] text-[#B0B5AA] cursor-pointer hover:bg-[#FAF9F5] active:bg-[#F1EEE5] transition-colors duration-150"
            >
              Previous
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-lg bg-[#2E9F63] text-white cursor-pointer hover:bg-[#278A55] active:bg-[#1F6E42] transition-colors duration-150"
            >
              1
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-lg border border-[#ECE8DD] text-[#16281D] cursor-pointer hover:bg-[#FAF9F5] active:bg-[#F1EEE5] transition-colors duration-150"
            >
              2
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg border border-[#ECE8DD] text-[#16281D] cursor-pointer hover:bg-[#FAF9F5] active:bg-[#F1EEE5] transition-colors duration-150"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl border border-[#ECE8DD] w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-[#16281D]">
                Add New Product
              </h2>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setIsModalOpen(false);
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#8B9088] hover:bg-[#F5F3EC] cursor-pointer transition-colors duration-150"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-medium text-[#6B7268] mb-1 block">
                  Product Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Cold-Brew Oat Latte"
                  required
                  className="w-full border border-[#ECE8DD] rounded-lg px-3 py-2 text-sm text-[#16281D] placeholder:text-[#B0B5AA] outline-none focus:border-[#2E9F63]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#6B7268] mb-1 block">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-[#ECE8DD] rounded-lg px-3 py-2 text-sm text-[#16281D] outline-none focus:border-[#2E9F63] cursor-pointer"
                  >
                    {categoryOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#6B7268] mb-1 block">
                    Price
                  </label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="4.80"
                    required
                    className="w-full border border-[#ECE8DD] rounded-lg px-3 py-2 text-sm text-[#16281D] placeholder:text-[#B0B5AA] outline-none focus:border-[#2E9F63]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#6B7268] mb-1 block">
                  Status
                </label>
                <div className="flex gap-2">
                  {(["Active", "Draft"] as Status[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStatus(s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${
                        status === s
                          ? s === "Active"
                            ? "bg-[#E4F5EA] text-[#218838]"
                            : "bg-[#FDF3D8] text-[#B7791F]"
                          : "bg-[#F5F3EC] text-[#8B9088] hover:bg-[#ECE8DD]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg text-sm text-[#6B7268] hover:bg-[#F5F3EC] cursor-pointer transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#2E9F63] hover:bg-[#278A55] active:bg-[#1F6E42] text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer transition-colors duration-150"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
