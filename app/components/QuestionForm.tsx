"use client";

import { useFormState } from "react-dom";
import { createAnswer } from "@/app/services/openai.action";
import { SendButton } from "./SendButton";
import { AnswerPrompt } from "./AnswerPrompt";
import { DynamicTextarea as Textarea } from "./DynamicTextarea";

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createAnswer, "");

  return (
    <form className="max-w-3xl m-auto" action={dispatch}>
      <div className="flex">
        <Textarea name="situation" placeholder="고민을 입력해봐!" />
        <SendButton />
      </div>
      <div>
        <AnswerPrompt answer={answer} />
      </div>
    </form>
  );
};
