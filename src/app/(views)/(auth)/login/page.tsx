"use client";

import LoginComponent from "@/app/components/LoginComponent";
import WithoutAuth from "@/app/lib/hoc/WithoutAuth";

const Login = () => {
  return (
    <div
      className="flex justify-center items-center h-screen p-2"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/close-cropped-high-angle-photo-600nw-692589601.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoginComponent />
    </div>
  );
};

export default WithoutAuth(Login);
