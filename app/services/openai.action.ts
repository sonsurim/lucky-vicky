"use server";

import OpenAI from "openai";
import { prompts } from "@/app/constants/prompts";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
});

export const createQuestion = async (prevState: any, formData: FormData) => {
  const question = formData.get("question") as string;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      ...prompts,
      {
        role: "user",
        content: question,
      },
    ],
  });

  return response.choices[0].message.content;
};
