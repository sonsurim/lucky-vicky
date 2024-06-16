import { QuestionForm } from "@/app/components/QuestionForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pr-24 pl-24 pt-20">
      <div>
        <Image
          className="mb-3 m-auto"
          src="/logo.png"
          width={300}
          height={300}
          alt="logo"
        />
        <div className="mb-10 m-auto text-center text-gray-500">
          🍀 당신의 고민을 가볍게 만들어줄 수 있는 서비스 🍀
        </div>
      </div>
      <QuestionForm />
    </main>
  );
}
