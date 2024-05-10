'use client'

import { SendButton } from "./SendButton"
import { useFormState } from 'react-dom'
import { createQuestion } from '../services/actions/openai'
import { AnswerPromptProps } from "./AnswerPrompt"

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createQuestion, '')

  return (
    <form className="w-80" action={dispatch}>
      <p className="border flex">
        <input className="w-full" type="text" name="question" placeholder="힘든 일을 입력해봐!"/>
        <SendButton/>
      </p>
      <p>
        <AnswerPromptProps answer={answer || ''}/>
      </p>
    </form>
  )
}