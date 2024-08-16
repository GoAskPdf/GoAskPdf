"use client";
import DropFiles from "@/components/dropFiles/DropFiles";
import UploadFileStatus from "@/components/dropFiles/UploadFileStatus";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Please login to upload files");
      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="text-5xl text-center text-white mt-20">Loading...</div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="Uploadpdfcontainer flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-4xl">Upload files</h1>
          <p className="md:text-xl text-center text-sm">
            PDF, text, images or Presentations. Max 10MB each.
          </p>
        </div>
        <DropFiles />
        <UploadFileStatus />
      </div>
    </div>
  );
};

export default Page;
