import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Modal = ({ modalOpen, setModalOpen }: { modalOpen: boolean }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Header with Title & Image */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Update Scores</h1>
          <img src="/your-image.png" alt="Stage" className="h-8 w-8" />
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {/* Rank Update */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full">
              1
            </div>
            <span className="font-bold">Update your Rank:</span>
            <input
              type="number"
              placeholder="Enter Rank"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Percentile Update */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full">
              2
            </div>
            <span className="font-bold">Update your Percentile:</span>
            <input
              type="number"
              placeholder="Enter Percentile"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Score Update */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full">
              3
            </div>
            <span className="font-bold">Update your Current Score:</span>
            <input
              type="number"
              placeholder="Enter Score (out of 15)"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-purple-600 text-white flex items-center gap-2">
            Save <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
