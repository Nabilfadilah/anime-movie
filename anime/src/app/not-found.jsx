"use client";

import { LuFileSearch } from "react-icons/lu";
import Typography from "@/elements/button/text/Typography";
import Button from "@/elements/button/Button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <LuFileSearch size={44} className="text-color-accent" />
        <Typography className="text-color-accent text-4xl font-bold">
          NOT FOUND
        </Typography>
        <Button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          Kembali
        </Button>
      </div>
    </div>
  );
};

export default Page;
