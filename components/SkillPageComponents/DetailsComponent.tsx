"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Modal from "@/components/SkillPageComponents/Modal"; // Ensure correct import
interface SyllabusWiseAnalysisItem {
  name: string;
  completionPercentage: number;
}
interface DummyData {
  imageLink: string;
  topicName: string;
  questionCount: number;
  duration: number;
  submissionDate: string;
  rankAchieved: number;
  percentileAchieved: number;
  correctAnswers: number;
  totalQuestions: number;
  percentiles: number[];
  syllabusWiseAnalysisData: SyllabusWiseAnalysisItem[];
}

function DetailsComponent({
  imageLink,
  topicName,
  questionCount,
  duration,
  submissionDate,
  setData,
}: {
  imageLink: string;
  topicName: string;
  questionCount: number;
  duration: number;
  submissionDate: string;
  setData: React.Dispatch<React.SetStateAction<DummyData>>;
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const stats = [
    {
      name: "Questions",
      value: questionCount,
    },
    {
      name: "Duration",
      value:
        duration > 60
          ? `${Math.floor(duration / 60)} hrs ${duration % 60} min`
          : `${duration} min`,
    },
    {
      name: "Submitted On",
      value: submissionDate,
    },
  ];

  return (
    <div className="border-2 p-4 rounded-lg shadow-md bg-white dark:bg-gray-900 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full max-w-xl mx-auto">
      {/* Left Section: Image */}
      <div className="flex-shrink-0">
        <Image
          src={imageLink}
          alt="topic"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Middle Section: Text */}
      <div className="flex flex-col gap-1 text-center md:text-left w-full ">
        <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100">
          {topicName}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-2">
          {stats.map((stat, index) => (
            <span key={index} className="flex items-center">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {stat.name}:
              </span>
              <span className="ml-1">{stat.value}</span>

              {/* Add '|' separator except for last item */}
              {index !== stats.length - 1 && (
                <span className="mx-2 text-gray-400 dark:text-gray-600">|</span>
              )}
            </span>
          ))}
        </p>
      </div>

      {/* Right Section: Button */}
      <Button
        className="bg-violet-900 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-all duration-300 active:scale-95"
        onClick={() => setModalOpen(true)}
      >
        Update
      </Button>

      {/* Modal */}
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          setData={setData}
          imageLink={imageLink}
        />
      )}
    </div>
  );
}

export default DetailsComponent;
