import { FaBook, FaHeartbeat, FaLifeRing, FaPalette, FaTree } from 'react-icons/fa'; // Importing icons from react-icons

let programData = [
    {
        id: 1,
        logo: <FaBook className="text-2xl text-blue-500 size-[2.25rem]" />,
        progName: "EDUCATION",
        description: "Spreading Education for holistic development of children",
        path: "education"
    },
    {
        id: 2,
        logo: <FaHeartbeat className="text-2xl text-red-500 size-[2.25rem]" />,
        progName: "HEALTHCARE",
        description: "Providing Medicine and Health related critical advise",
        path: "health"
    },
    {
        id: 3,
        logo: <FaLifeRing className="text-2xl text-green-500 size-[2.25rem]" />,
        progName: "DISASTER RESPONSE",
        description: "Reaching out and helping people to come out of disaster",
        path: "disaster"
    },
    {
        id: 4,
        logo: <FaPalette className="text-2xl text-yellow-500 size-[2.25rem]" />,
        progName: "CULTURAL PROGRAM",
        description: "Spreading cultural harmony between people and increasing togetherness",
        path: "cultural"
    },
    {
        id: 5,
        logo: <FaTree className="text-2xl text-green-700 size-[2.25rem]" />,
        progName: "ENVIRONMENTAL WORKS",
        description: "Taking steps to balance environment",
        path: "environment"
    },
];

export default programData;
