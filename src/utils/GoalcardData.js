import { FaHeartbeat, FaBook, FaLeaf, FaTheaterMasks } from 'react-icons/fa';

const GoalcardData = [
    {   
        id: 1,
        logo: <FaHeartbeat size={40} color="red" />,
        context: "Providing quality healthcare and well being"
    },
    {
        id: 2,
        logo: <FaBook size={40} color="blue" />,
        context: "Ensuring access to quality education to children"
    },
    {
        id: 3,
        logo: <FaLeaf size={40} color="green" />,
        context: "Promoting environmental sustainability"
    },
    {
        id: 4,
        logo: <FaTheaterMasks size={40} color="purple" />,
        context: "Fostering cultural awareness and unity among people"
    }
];

export default GoalcardData;
