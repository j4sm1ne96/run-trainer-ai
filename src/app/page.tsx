'use client';
import {useState} from "react";

//Import Types
import { RunnerProfile, TrainingPlan } from "@/types";

//Import components
import Header from "@/components/Header";
import RunnerForm from "@/components/RunnerForm";
import PlanDisplay from "@/components/PlanDisplay";

export default function Home() {
  const [runnerProfile, setRunnerProfile] = useState<RunnerProfile | null>(null);
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | null>(null);

  function handleProfile(profile: RunnerProfile) {
    setRunnerProfile(profile);
    setTrainingPlan({weeks: [], summary: "Traiing plan coming soon"});
  }

  return (
    <main className="min-h-screen max-2xl mx-auto px-4 py-8">
      <Header />
      <RunnerForm onSubmit={handleProfile}/>

      {runnerProfile && <PlanDisplay profile={runnerProfile} />}
    </main>
  )
}