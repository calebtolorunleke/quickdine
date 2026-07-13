import { Lock, Mail, Phone, User, X } from "lucide-react";
import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogInTab, setIsLogInTab] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  if (!isOpen) return null;

  const handleclose = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="absolute inset-0" onClick={handleclose}></div>

      {/* modal container  */}
      <div className="relative w-full max-w-md bg-white border border-[#c4c7c7]/50 ambient-shadow rounded-lg overflow-hidden z-10 transition-soft transform scale-100 flex flex-col">
        <button
          onClick={handleclose}
          className="absolute top-4 right-4 text-black/55 hover:text-black/55 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex border-b border-[#c4c7c7]/50 ">
          <button
            onClick={() => setIsLogInTab(true)}
            className={`flex-1 py-5 text-center  text-xs font-medium tracking-widest transition-soft cursor-pointer ${isLogInTab ? "text-black border-b-2 border-black bg-white-container-lowest" : "text-black/55 hover:text-black bg-surface-container-lowest"}`}
          >
            SIGN IN
          </button>{" "}
          <button
            onClick={() => setIsLogInTab(false)}
            className={`flex-1 py-5 text-center  text-xs font-medium tracking-widest transition-soft cursor-pointer ${!isLogInTab ? "text-black border-b-2 border-black bg-white-container-lowest" : "text-black/55 hover:text-black bg-surface-container-lowest"}`}
          >
            SIGN UP
          </button>
        </div>

        {/* form content  */}

        <form
          action=""
          className="p-8 space-y-6 flex-1 flex flex-col justify-between"
        >
          <div>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-medium text-black tracking-tight">
                Welcome to QuickDine
              </h2>
              <p className="text-xs text-black/55 mt-2 loading-relaxed">
                Access your exclusive reservations and curated dining profile.
              </p>
            </div>

            <div className="space-y-5">
              {!isLogInTab && (
                <div className="space-y-1">
                  <label className="block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      required={!isLogInTab}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Caleb Adebayo"
                      className="w-full pl-7 pb-2 text-sm bg-transparent border-b border-[f9f9f9]/60 focus:border-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone Field (Register Only) */}
              {!isLogInTab && (
                <div className="space-y-1">
                  <label className="block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase">
                    PHONE NUMBER (OPTIONAL)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55">
                      <Phone size={16} />
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Password Field */}
              <div className="space-y-1">
                <label className="block text-left text-[10px] font-medium text-black/55 tracking-wider uppercase">
                  PASSWORD
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none text-black/55">
                    <Lock size={16} />
                  </span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-7 pb-2 pt-1 text-sm bg-transparent border-b border-outline-variant/60 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Owner Checkbox (Register Only) */}
              {!isLogInTab && (
                <div className="flex items-center gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="isOwner"
                    checked={isOwner}
                    onChange={(e) => setIsOwner(e.target.checked)}
                    className="h-4 w-4 accent-secondary rounded border-outline-variant/60 cursor-pointer"
                  />
                  <label
                    htmlFor="isOwner"
                    className="text-xs text-black/55 select-none cursor-pointer"
                  >
                    I am a Restaurant Owner / Manager
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={formLoading}
              className="w-full bg-black hover:bg-secondary text-white py-3.5 px-4 text-xs font-medium tracking-widest uppercase focus:outline-none transition-colors disabled:opacity-75 cursor-pointer"
            >
              {formLoading
                ? "PROCESSING..."
                : isLogInTab
                  ? "LOGIN"
                  : "CREATE ACCOUNT"}
            </button>

            <p className="text-center text-[11px] text-black/55/80 mt-4 leading-relaxed">
              By signing in, you agree to our{" "}
              <a href="#" className="underline hover:text-primary">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </form>

        {/* form content  */}
      </div>
    </div>
  );
};
export default AuthModal;
