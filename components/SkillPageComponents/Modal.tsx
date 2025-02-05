"use client";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

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

const Modal = ({
  setModalOpen,
  imageLink,
  setData,
  totalQuestions,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageLink: string;
  setData: React.Dispatch<React.SetStateAction<DummyData>>;
  totalQuestions: number;
}) => {
  //Various states to be used in form and validation
  const [rank, setRank] = useState<string>("");
  const [percentile, setPercentile] = useState<string>("");
  const [score, setScore] = useState<string>("");

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  //Function to check if the form is valid
  const validateForm = () => {
    let isValid = true;
    const newErrors = { rank: "", percentile: "", score: "" };

    if (!rank || isNaN(Number(rank)) || Number(rank) < 1) {
      newErrors.rank = "Rank must be a valid number and greater than 0.";
      isValid = false;
    }

    if (!percentile || Number(percentile) < 0 || Number(percentile) > 100) {
      newErrors.percentile = "Percentile must be between 0 and 100.";
      isValid = false;
    }

    if (!score || Number(score) < 0 || Number(score) > totalQuestions) {
      newErrors.score = `Score must be between 0 and ${totalQuestions}.`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  //Function called when save button is clicked
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //If form entries are not valid then return
    if (!validateForm()) return;

    // Else update the data
    setData((prevData) => {
      // Updating the percentiles array with our new percentile
      const updatedPercentiles = [...prevData.percentiles];
      const index = updatedPercentiles.indexOf(prevData.percentileAchieved);

      if (index !== -1) {
        updatedPercentiles[index] = Number(percentile); // Set only the first occurrence to 100
      }

      return {
        ...prevData,
        percentiles: updatedPercentiles,
        rankAchieved: Number(rank),
        percentileAchieved: Number(percentile),
        correctAnswers: Number(score),
        submissionDate: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
    });
    //Close the modal
    setModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Update Scores</h1>
          <Image
            src={imageLink}
            alt="Stage"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-3 items-center">
            {/* Rank Update */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-purple-300">
                1
              </div>
              <span className="font-bold">Update your Rank:</span>
            </div>
            <div>
              <input
                type="text"
                value={rank}
                onChange={(e) =>
                  setRank(e.target.value.replace(/^0+/, "") || "0")
                }
                placeholder="Enter Rank"
                className={`border p-2 rounded w-full outline-none focus:ring-2 ${
                  errors.rank
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-purple-500"
                }`}
              />
              {errors.rank && (
                <p className="text-red-500 text-sm mt-1">{errors.rank}</p>
              )}
            </div>

            {/* Percentile Update */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-purple-300">
                2
              </div>
              <span className="font-bold">Update your Percentile:</span>
            </div>
            <div>
              <input
                type="text"
                value={percentile}
                onChange={(e) =>
                  setPercentile(e.target.value.replace(/^0+/, "") || "0")
                }
                placeholder="Enter Percentile"
                className={`border p-2 rounded w-full outline-none focus:ring-2 ${
                  errors.percentile
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-purple-500"
                }`}
              />
              {errors.percentile && (
                <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>
              )}
            </div>

            {/* Score Update */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-purple-300">
                3
              </div>
              <span className="font-bold">
                Update your Current Score (out of {totalQuestions}):
              </span>
            </div>
            <div>
              <input
                type="text"
                value={score}
                onChange={(e) =>
                  setScore(e.target.value.replace(/^0+/, "") || "0")
                }
                placeholder={`Enter Score (0 - ${totalQuestions})`}
                className={`border p-2 rounded w-full outline-none focus:ring-2 ${
                  errors.score
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-purple-500"
                }`}
              />
              {errors.score && (
                <p className="text-red-500 text-sm mt-1">{errors.score}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => setModalOpen(false)}
              className="dark:border-gray-500 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition-all duration-300 active:scale-95"
            >
              Save <ArrowRight size={18} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
