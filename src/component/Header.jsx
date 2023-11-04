import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full"
          src="https://media.licdn.com/dms/image/D5603AQHI8uq8fvaqeg/profile-displayphoto-shrink_800_800/0/1676882495046?e=1704326400&v=beta&t=-yLlif0jHKTynP0ViN0UvJDoh8M6FXb31MR5Sji4rQk"
          alt=""
        />
      </div>
      <div className="flex gap-2">
        <AiOutlineInstagram></AiOutlineInstagram>
        <AiOutlineTwitter></AiOutlineTwitter>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Daniel Yulius</h1>
        <div className="w-4 h-4 rounded-full bg-[#E99355] mt-2"></div>
      </div>
    </div>
  );
};

export default Header;
