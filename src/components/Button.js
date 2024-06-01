import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/donation');
    };

    return (
        <div className="button">
            <button
                onClick={handleClick}
                className="btn btn-primary bg-green-700 border rounded w-40 h-[2.25rem] text-white hover:bg-teal-700"
            >
                DONATE US
            </button>
        </div>
    );
};

export default Button;
