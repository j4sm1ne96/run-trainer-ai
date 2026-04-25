'use client';

import { useState, SyntheticEvent } from "react";
import { RunnerProfile } from "@/types";

interface RunnerFormProps {
    onSubmit: (profile: RunnerProfile) => void
}

export default function RunnerForm({onSubmit}: RunnerFormProps) {
    const [raceDistance, setRaceDistance] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [weeklyMileage, setWeeklyMileage] = useState('');
    const [unit, setUnit] = useState<'km' | 'miles'>('km');
    const [date, setDate] = useState('');

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        console.log({ raceDistance, experienceLevel, weeklyMileage, unit, date });

        const profile: RunnerProfile = {
            goalRace: raceDistance as RunnerProfile['goalRace'],
            goalDate: date,
            weeklyMileage: Number(weeklyMileage),
            unit: unit,
            experienceLevel: experienceLevel as RunnerProfile['experienceLevel']
        }

        onSubmit(profile)
    }

    return (
        <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                Goal Race Distance:
                <select 
                    name="goalRace"
                    value={raceDistance}
                    onChange={e => setRaceDistance(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    <option value="">Select...</option>
                    <option value="5km">5 KM</option>
                    <option value="10km">10 KM</option>
                    <option value="21km">21 KM</option>
                    <option value="42km">42 KM</option>
                </select>
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                Experience Level:
                <select 
                    name="experienceLevel"
                    value={experienceLevel}
                    onChange={e => setExperienceLevel(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    <option value="">Select...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                Weekly Mileage:
                <div className="flex gap-2">
                    <input
                        type="number"
                        value={weeklyMileage}
                        onChange={e => setWeeklyMileage(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <select
                        value={unit}
                        onChange={e => setUnit(e.target.value as 'km' | 'miles')}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        <option value="km">km</option>
                        <option value="miles">miles</option>
                    </select>
                </div>
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                Race Date:
                <input type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
            </label>
            <button type="submit" className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">Submit form</button>
        </form>
    )
}