import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageLink: string;
  setData: React.Dispatch<React.SetStateAction<DummyData>>;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/* Header with Title & Image */}
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

        {/* Input Fields Section */}
        <div className="space-y-4">
          {/* Row with Labels and Inputs */}
          <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-3 items-center">
            {/* Rank Update */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-purple-300">
                1
              </div>
              <span className="font-bold">Update your Rank:</span>
            </div>
            <input
              type="number"
              placeholder="Enter Rank"
              className="border dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Percentile Update */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-purple-300">
                2
              </div>
              <span className="font-bold">Update your Percentile:</span>
            </div>
            <input
              type="number"
              placeholder="Enter Percentile"
              className="border dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Score Update */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-purple-300">
                3
              </div>
              <span className="font-bold">Update your Current Score:</span>
            </div>
            <input
              type="number"
              placeholder="Enter Score (out of 15)"
              className="border dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded w-full outline-none focus:ring-2 focus:ring-purple-500"
            />
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
          <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition-all duration-300 active:scale-95">
            Save <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
