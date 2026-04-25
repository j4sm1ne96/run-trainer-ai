export type RaceDistance = '5k' | '10k' | 'half-marathon' | 'marathon'
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced'

export interface RunnerProfile {
  goalRace: RaceDistance
  goalDate: string
  weeklyMileage: number
  unit: 'km' | 'miles'
  experienceLevel: ExperienceLevel
}

export interface TrainingSession {
  type: 'easy' | 'tempo' | 'long' | 'rest' | 'intervals'
  distance?: number
  notes: string
}

export interface TrainingWeek {
  weekNumber: number
  monday: TrainingSession
  tuesday: TrainingSession
  wednesday: TrainingSession
  thursday: TrainingSession
  friday: TrainingSession
  saturday: TrainingSession
  sunday: TrainingSession
}

export interface TrainingPlan {
  weeks: TrainingWeek[]
  summary: string
}