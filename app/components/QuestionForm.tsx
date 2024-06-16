"use client";

import { SendButton } from "./SendButton";
import { useFormState } from "react-dom";
import { createQuestion } from "../services/openai.action";
import { AnswerPromptProps } from "./AnswerPrompt";
import { DynamicTextarea } from "./DynamicTextarea";

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createQuestion, "");

  return (
    <form className="max-w-3xl m-auto" action={dispatch}>
      <div className="flex">
        <DynamicTextarea name="question" placeholder="고민을 입력해봐!" />
        <SendButton />
      </div>
      <div>
        <AnswerPromptProps answer={answer || ""} />
      </div>
    </form>
  );
};
