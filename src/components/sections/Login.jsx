import { RevealOnScroll } from "./RevealOnScroll";

export const Login = ({ onLoginSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <section id="login" className="min-h-screen flex items-center justify-center relative px-4">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 z-10 max-w-4xl mx-auto w-full">

          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Please login to your account to continue.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md border border-white/10"
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Login
            </button>

            <p className="mt-4 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <a href="#signup" className="text-blue-400 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
