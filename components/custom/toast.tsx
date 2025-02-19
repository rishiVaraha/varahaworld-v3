import React from "react";
import { toast } from "sonner";

// Success Toast Component

interface SuccessToastProps {
  successMessage: string;
  descMessage?: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({
  successMessage,
  descMessage,
}) => {
  return (
    <>
      {toast.success(successMessage, {
        description: descMessage,
        icon: (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black p-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check font-bold text-green-400"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        ),
        cancel: {
          label: "Dismiss",
          onClick: () => toast.dismiss(1),
        },
      })}
    </>
  );
};

// Error Toast Component

interface ErrorToastProps {
  errorMessage: string;
  descMessage?: string;
}
const ErrorToast: React.FC<ErrorToastProps> = ({
  errorMessage,
  descMessage,
}) => {
  return (
    <>
      {toast.error(errorMessage, {
        description: descMessage,
        icon: (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black p-2 text-xs">
            ❌
          </div>
        ),
        cancel: {
          label: "Dismiss",
          onClick: () => toast.dismiss(1),
        },
      })}
    </>
  );
};

export { SuccessToast, ErrorToast };
