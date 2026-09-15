"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  showBackButton?: boolean;
  children?: ReactNode;
}

export default function Header({
  title,
  onBack,
  showBackButton = true,
  children,
}: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <header className="w-full bg-white border-b border-[#ECE8DD] px-8 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <button
            type="button"
            onClick={handleBack}
            aria-label="Go back"
            className="w-10 h-10 rounded-full border border-[#D9DFDA] flex items-center justify-center text-[#16281D] hover:bg-[#F5F5F5] active:bg-[#ECE8DD] transition-colors duration-150 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2]" />
          </button>
        )}

        <h1 className="text-xl font-bold text-[#123524] tracking-tight">
          {title}
        </h1>
      </div>

      {/* Render optional right-aligned elements like buttons or badges */}
      {children && <div>{children}</div>}
    </header>
  );
}