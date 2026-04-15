type RaceDistance = '5k' | '10k' | 'half-marathon' | 'marathon'
type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced'

interface RunnerProfile {
  goalRace: RaceDistance
  goalDate: string
  weeklyMileage: number
  experienceLevel: ExperienceLevel
}

interface TrainingSession {
  type: 'easy' | 'tempo' | 'long' | 'rest' | 'intervals'
  distance?: number
  notes: string
}

interface TrainingWeek {
  weekNumber: number
  monday: TrainingSession
  tuesday: TrainingSession
  wednesday: TrainingSession
  thursday: TrainingSession
  friday: TrainingSession
  saturday: TrainingSession
  sunday: TrainingSession
}

interface TrainingPlan {
  weeks: TrainingWeek[]
  summary: string
}