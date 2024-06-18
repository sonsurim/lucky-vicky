"use client";

import { useFormStatus } from "react-dom";
import { randomNum } from "@/app/utils/random";
import { Vicky } from "./Vicky";

type AnswerPromptProps = {
  answer: string;
};

export const AnswerPrompt = ({ answer }: AnswerPromptProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      {pending ? (
        <Vicky
          imageUrl={`/vicky/${randomNum()}.jpeg`}
          text="원영적 사고로 생각중... 🌟"
        />
      ) : (
        <Vicky imageUrl="/vicky/answer.jpeg" text={answer} />
      )}
    </div>
  );
};
