import React, { useState, useEffect } from 'react';
import Card from '../Component/Cards';

const Mainpage = () => {
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                localStorage.setItem('profileImage', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const cardsData = [
        {
            title: 'Card 1',
            description: 'This is the description for card 1.',
            image: 'https://via.placeholder.com/150',
            whatsappLink: 'https://wa.me/7905340717?text=Hello from Card 1',
        },
        {
            title: 'Card 2',
            description: 'This is the description for card 2.',
            image: 'https://via.placeholder.com/150',
            whatsappLink: 'https://wa.me/7905470224?text=Hello from Card 2',
        },
        {
            title: 'Card 3',
            description: 'This is the description for card 3.',
            image: 'https://via.placeholder.com/150',
            whatsappLink: 'https://wa.me/7905470224?text=Hello from Card 3',
        },
        {
            title: 'Card 4',
            description: 'This is the description for card 4.',
            image: 'https://via.placeholder.com/150',
            whatsappLink: 'https://wa.me/7905470224?text=Hello from Card 4',
        },
        {
            title: 'Card 5',
            description: 'This is the description for card 5.',
            image: 'https://via.placeholder.com/150',
            whatsappLink: 'https://wa.me/7905470224?text=Hello from Card 5',
        },
    ];

    return (
        <>

<div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 px-4 py-[5vw] rounded-br-3xl rounded-bl-3xl shadow-lg">
    <div className="flex flex-col-reverse md:flex-row items-center md:space-x-4">
        <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-white text-3xl font-bold lg:ml-60 mb-2 text-shadow">Dr. Shubham Dubey,</h2>
            <h3 className="text-yellow-300 text-xl lg:ml-60  text-shadow">Team Tech</h3>
            <h6 className="text-yellow-100 text-xl lg:ml-60 mb-4 text-shadow">
            A team of expert clinical dietitians, yoga coaches and psychologists.</h6>
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 lg:ml-60">
                <div className="flex items-center text-white text-sm mb-2 md:mb-0 backdrop-blur-sm bg-white/30 rounded-full px-3 py-1">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    janedoe@gmail.com
                </div>
                <div className="flex items-center text-white text-sm mb-2 md:mb-0 backdrop-blur-sm bg-white/30 rounded-full px-3 py-1">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +1 9000 0000
                </div>
                <div className="flex items-center text-white text-sm backdrop-blur-sm bg-white/30 rounded-full px-3 py-1">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Kanpur
                </div>
            </div>
        </div>
        <div className="flex-shrink-0 relative ">
            <div className="w-48 h-48 lg:mr-40 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 shadow-xl">
                <img
                    src={profileImage || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                />
            </div>
            <label htmlFor="profile-upload" className="absolute lg:mr-40 bottom-2 right-2 bg-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-yellow-100 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </label>
            <input
                type="file"
                id="profile-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
            />
        </div>
    </div>
</div>
          

            <div className="min-h-screen bg-gray-100 p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            onClick={() => window.open(card.whatsappLink, '_blank')}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Mainpage;
