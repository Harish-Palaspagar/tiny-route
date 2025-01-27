/* eslint-disable react/prop-types */
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white p-6">
            <div className="bg-white rounded-full p-6 shadow-lg flex items-center justify-center">
                <FaExclamationTriangle className="text-5xl text-red-500" />
            </div>
            <h1 className="text-4xl font-bold mt-6 mb-3 text-center">
                Oops! Something Went Wrong
            </h1>
            <p className="text-lg mb-8 text-center max-w-lg text-gray-200">
                {message ? message : "We encountered an error. Please try again later or contact support for assistance."}
            </p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 hover:text-white transition-transform duration-300 transform hover:scale-105"
            >
                Back to Home
            </button>
            <div className="absolute bottom-4 text-sm text-gray-300 opacity-90">
                If the issue persists, email us at <a href="mailto:support@example.com" className="underline hover:text-white">support@example.com</a>.
            </div>
        </div>
    );
};

export default ErrorPage;
