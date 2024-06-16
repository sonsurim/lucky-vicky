import { useFormStatus } from "react-dom";
import { Vicky } from "./Vicky";

type AnswerPromptProps = {
  answer: string;
};

export const AnswerPromptProps = ({ answer }: AnswerPromptProps) => {
  const { pending } = useFormStatus();
  const randomNum = Math.floor(Math.random() * 4) + 1;

  return (
    <div>
      {pending ? (
        <Vicky
          imageUrl={`/vicky/${randomNum}.jpeg`}
          text="원영적 사고로 생각중... 🌟"
        />
      ) : (
        answer && <Vicky imageUrl="/vicky/answer.jpeg" text={answer} />
      )}
    </div>
  );
};
