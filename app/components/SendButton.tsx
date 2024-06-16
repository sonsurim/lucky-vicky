"use client";
import { useFormStatus } from "react-dom";
import { Spinner } from "./Spinner";

export const SendButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="border w-20 h-10 ml-2 bg-white"
    >
      {pending ? <Spinner /> : "얍!✨"}
    </button>
  );
};
