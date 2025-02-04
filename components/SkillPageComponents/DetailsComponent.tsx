// This component is responsible to display the detail of current skill and update the value
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function DetailsComponent({
  imageLink,
  topicName,
  questionCount,
  duration,
  submissionDate,
}: {
  imageLink: string;
  topicName: string;
  questionCount: number;
  duration: number;
  submissionDate: string;
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (

     {/*Code for modal */}
     {modalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4">
          <h1>Update Details</h1>
          <input type="text" placeholder="Topic Name" />
          <input type="number" placeholder="Question Count" />
          <input type="number" placeholder="Duration" />
          <input type="date" placeholder="Submission Date" />
        </div>
      </div>
     )}
    <div className="border-2 p-2 flex items-center">
      <div>
        <Image src={imageLink} alt="topic" width={100} height={100} />
      </div>
      <div className="flex-col">
        <h1 className="font-bold">{topicName}</h1>
        <p>
          Questions:{questionCount}|Duration:{duration}|Submitted On:
          {submissionDate}
        </p>
      </div>
      <Button
        className="flex items-center justify-center bg-violet-900 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        Update
      </Button>
    </div>
  );
}

export default DetailsComponent;
