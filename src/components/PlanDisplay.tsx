import { RunnerProfile } from "@/types";

interface PlanDisplayProps {
  profile: RunnerProfile
}

export default function PlanDisplay({profile}: PlanDisplayProps) {
    return (
        <div>
            <h2>Your 8-week Training Plan</h2>
            <p>Goal: {profile.goalRace} on {profile.goalDate}</p>
            <p>Weekly mileage: {profile.weeklyMileage} {profile.unit}</p>
        </div>
    )
}