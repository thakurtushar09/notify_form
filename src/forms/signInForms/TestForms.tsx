import React from 'react';

const TestForms = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4">
      <form className="w-full max-w-sm bg-[#1e1e1e] p-6 rounded-lg space-y-4 shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default TestForms;
