"use client";
import React from "react";
import DetailsComponent from "@/components/SkillPageComponents/DetailsComponent";
import QuickStatisticsComponent from "@/components/SkillPageComponents/QuickStatisticsComponent";
import ComparisonGraphComponent from "@/components/SkillPageComponents/ComparisonGraphComponent";
import SyllabusWiseAnalysisComponent from "@/components/SkillPageComponents/SyllabusWiseAnalysisComponent";
import QuestionAnalysisComponent from "@/components/SkillPageComponents/QuestionAnalysisComponent";
import dummyData from "../dummyData";

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

function SkillTestPage() {
  const [data, setData] = React.useState<DummyData>(dummyData);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Section: Details, Quick Stats, Comparison Graph */}
      <div className="flex flex-col w-full md:w-2/3 gap-4">
        <h4 className="font-semibold text-muted-foreground">Skill Test</h4>

        <div className="bg-white dark:bg-gray-900 p-4 ">
          <DetailsComponent
            imageLink={data.imageLink}
            topicName={data.topicName}
            questionCount={data.questionCount}
            duration={data.duration}
            submissionDate={data.submissionDate}
            setData={setData}
          />
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 ">
          <QuickStatisticsComponent
            rankAchieved={data.rankAchieved}
            percentileAchieved={data.percentileAchieved}
            correctAnswers={data.correctAnswers}
            totalQuestions={data.totalQuestions}
          />
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 ">
          <ComparisonGraphComponent
            percentileAchieved={data.percentileAchieved}
            percentiles={data.percentiles}
          />
        </div>
      </div>

      {/* Right Section: Syllabus & Question Analysis */}
      <div className="flex flex-col w-full md:w-1/3 gap-4">
        <div className="mb-4" /> {/* This replaces h4 spacing */}
        <div className="bg-white dark:bg-gray-900 p-4">
          <SyllabusWiseAnalysisComponent
            syllabusWiseAnalysisData={data.syllabusWiseAnalysisData}
          />
        </div>
        <div className="bg-white dark:bg-gray-900 p-4">
          <QuestionAnalysisComponent
            correctAnswers={data.correctAnswers}
            totalQuestions={data.totalQuestions}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillTestPage;
