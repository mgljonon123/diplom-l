"use client"

import React, { useState } from "react";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Register Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-0">
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="bg-gray-200 rounded-xl w-12 h-12 flex items-center justify-center mb-8 text-2xl font-bold text-gray-700">
            N
          </div>
          <h2 className="text-3xl font-bold mb-2 text-left w-full">Шинэ бүртгэл үүсгэх</h2>
          <p className="text-gray-500 mb-6 text-left w-full">
            Хэцүү биш ээ, чи ердөө хэдхэн мэдээлэл оруулаад л бүртгэл чинь бэлэн болно.
          </p>
          <form className="w-full">
            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Бүтэн нэр</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="Neo"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1 invisible">Бүтэн нэр</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  placeholder="G7"
                />
              </div>
            </div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-100"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="neoisneo07@gmail.com"
            />
            <label className="block text-sm font-medium mb-1">Нууц үг</label>
            <input
              type="password"
              className="w-full mb-6 px-4 py-2 border rounded-lg bg-gray-100"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••••••••"
            />
            <div className="text-xs text-gray-500 mb-6">
              Бүртгүүлснээр та Neohub.com-ийн үйлчилгээний нөхцөл ба нууцлалын бодлогыг хүлээн зөвшөөрч байна
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-semibold text-lg shadow-md hover:bg-gray-900 transition mb-2"
            >
              Бүртгүүлэх
            </button>
          </form>
        </div>
      </div>
      {/* Right Side - Image & Quote */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center relative">
        <img
          src="/4e659b59aabaf3fae230a92f49aede08 2.svg"
          alt="NeoHub Visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white p-10 flex flex-col justify-end h-full">
          <div className="mb-2 text-xs tracking-widest opacity-80">neoisneo07@gmail.com</div>
          <div className="text-2xl font-semibold leading-snug">
            Бүртгүүлээд энд суралцаарай,<br />ухаалаг болоод өөрийгөө хөгжүүлнэ!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;