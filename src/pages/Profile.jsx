import React from "react";
import { Camera } from "lucide-react";
const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-5">
      <div className="w-[375px] h-[812px] bg-white rounded-lg shadow-mobile flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h1 className="font-rubik font-normal text-lg text-gray-900 capitalize">
            Account Settings
          </h1>
        </div>

        <div className="flex-1 bg-background border-b-2 border-dashed border-border flex flex-col mb-9">
          <div className="bg-background border-b-2 border-dashed border-border">
            <div className="flex items-start gap-5 mb-[30px] mt-[30px] ml-5">
              <div className="relative flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-[76px] h-[76px] rounded-full object-cover block"
                  onError={(e) => {
                    console.log("Profile image failed to load");
                  }}
                />
                <div className="absolute bottom-1 right-0 w-[21px] h-[21px] bg-blue-500 rounded-full flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="font-rubik font-medium text-[15px] text-text-primary leading-[19px] m-0 mb-[6px] w-[73px] h-[18px]">
                  Mary Doe
                </h2>
                <p className="font-rubik font-normal text-sm text-text-primary leading-[19px] m-0 w-[118px] h-[17px]">
                  Mary@gmail.com
                </p>
              </div>
            </div>

            <p className="font-rubik font-normal text-sm text-text-primary leading-[22px] mb-[30px] text-left ml-5 mr-[18px]">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore
            </p>
          </div>
        </div>

        <div className="w-10 h-10"></div>
      </div>
    </div>
  );
};

export default Profile;