import React, { useState } from 'react';

const Step3 = ({ nextStep }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index) => {
        setActiveButton(index);
        // Perform any other actions you want when a button is clicked
        // For example, you can call nextStep() if needed.
    };

    const buttons = [
        'Current Symptoms',
        'Preventative Symptoms',
        'General Health',
        'I don\'t know, just exploring',
    ];

    return (
        <>
            <div className="options grid gap-5 sm:grid-cols-3 mt-5">
                {buttons.map((buttonText, index) => (
                    <button
                        key={index}
                        className={`text-lg px-4 py-4 ${
                            activeButton === index ? 'bg-[#5A63FE] text-white' : 'bg-[#E5E8EF]'
                        } py-1 rounded-xl hover:bg-[#5A63FE] hover:text-white`}
                        onClick={() => {
                            handleButtonClick(index);
                        
                        }}
                    >
                        {buttonText}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Step3;
