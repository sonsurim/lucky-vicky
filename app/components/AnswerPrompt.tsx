import { useFormStatus } from "react-dom"

type AnswerPromptProps = {
  answer: string
}

export const AnswerPromptProps = ({ answer }: AnswerPromptProps) => {
  const { pending } = useFormStatus()

  return (
    <>{pending ? '원영적 사고로 생각중... 🌟' : answer}</>
  )
}
