import Image from "next/image";

type VickyProps = {
  imageUrl: string;
  text: string;
};

export const Vicky = ({ imageUrl, text }: VickyProps) => {
  return (
    <div className="mt-5 flex flex-col items-center">
      <Image src={imageUrl} width={200} height={200} alt="vicky" />
      <span className="mt-2 w-72 text-center break-keep">{text}</span>
    </div>
  );
};
