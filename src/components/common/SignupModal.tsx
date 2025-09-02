'use client';
import React, { useState } from 'react';

const SignupModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-orange-400/90 to-orange-500/90 backdrop-blur-md border border-orange-300/50 rounded-2xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-300 ease-in-out">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-white font-['Philosopher'] mb-6 text-center">Sign Up</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white/90 font-['Lato']">Email or Phone</label>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white/10 border border-orange-300/30 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white placeholder-gray-300"
              placeholder="Enter email or phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 font-['Lato']">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white/10 border border-orange-300/30 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white placeholder-gray-300"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 font-['Lato']">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white/10 border border-orange-300/30 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white placeholder-gray-300"
              placeholder="Confirm password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2.5 rounded-lg hover:shadow-xl transition-all duration-200 font-['Work_Sans'] uppercase text-sm"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="w-full bg-orange-400/50 text-white font-semibold py-2.5 rounded-lg hover:bg-orange-500/70 hover:shadow-lg transition-all duration-200 font-['Work_Sans'] uppercase text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.91-2.48.54-3.03-1.04-3.23-1.99-.11-.48-.58-1.99-.99-2.39-.34-.57-.82-1.01-1.41-1.01-.96 0-1.74.58-1.74 1.25 0 .69.28 1.44.68 1.78.4.21.83.41 1.26.59 1.48.65 2.68.95 3.42.76.11-.59.43-1.01.78-1.24-2.74-.31-5.6-1.37-5.6-6.08 0-1.34.48-2.44 1.27-3.3-.13-.31-.55-1.56.12-3.25 0 0 1.03-.33 3.37 1.26 1-.28 2.07-.42 3.13-.42 1.06 0 2.13.14 3.13.42 2.34-1.59 3.37-1.26 3.37-1.26.67 1.69.25 2.94.12 3.25.79.86 1.27 1.96 1.27 3.3 0 4.71-2.86 5.77-5.6 6.08.44.23.83.68.83 1.37 0 1.02-.01 1.84-.01 2.09 0 .26.18.58.69.48C19.13 20.16 22 16.41 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
            Sign up with Google
          </button>
          <p className="mt-4 text-sm text-white/80">Already have an account? <button className="text-orange-200 hover:underline" onClick={() => { onClose(); /* Switch to Login */ }}>Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;