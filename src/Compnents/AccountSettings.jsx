import React from 'react';

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Account Settings</h1>
      
      <div className="flex flex-col items-center relative mb-4">
        <div className="relative w-36 h-36">
          <img 
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-4 mb-1">Marry Doe</h2>
        <p className="text-gray-600 mb-4">Marry@Gmail.Com</p>
      </div>
      
      <div className="px-4 flex justify-center">
  <div className="border-b border-dashed border-gray-300 pb-6 text-center max-w-md">
    <p className="text-gray-500 text-sm">
      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
    </p>
  </div>
</div>
    </div>
  );
};

export default AccountSettings;