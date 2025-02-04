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
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col md:m-5 m-2">
        <h4 className="font-semibold text-muted-foreground m-3">Skill Test</h4>
        <DetailsComponent
          imageLink={data.imageLink}
          topicName={data.topicName}
          questionCount={data.questionCount}
          duration={data.duration}
          submissionDate={data.submissionDate}
        />
        <QuickStatisticsComponent
          rankAchieved={data.rankAchieved}
          percentileAchieved={data.percentileAchieved}
          correctAnswers={data.correctAnswers}
          totalQuestions={data.totalQuestions}
        />
        <ComparisonGraphComponent
          percentileAchieved={data.percentileAchieved}
          percentiles={data.percentiles}
        />
      </div>
      <div className="flex flex-col">
        <SyllabusWiseAnalysisComponent
          syllabusWiseAnalysisData={data.syllabusWiseAnalysisData}
        />
        <QuestionAnalysisComponent
          correctAnswers={data.correctAnswers}
          totalQuestions={data.totalQuestions}
        />
      </div>
    </div>
  );
}

export default SkillTestPage;
