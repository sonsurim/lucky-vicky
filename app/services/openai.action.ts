"use server";

import OpenAI from "openai";
import { prompts } from "@/app/constants/prompts";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
});

export const createAnswer = async (_: any, formData: FormData) => {
  const situation = formData.get("situation") as string;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      ...prompts,
      {
        role: "user",
        content: situation,
      },
    ],
  });

  return response.choices[0].message.content;
};
