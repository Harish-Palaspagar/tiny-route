import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      console.log(response.token);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Login Successful!");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px] bg-white shadow-lg py-8 sm:px-8 px-4 rounded-xl border border-gray-200"
      >
        <h1 className="text-center text-3xl font-extrabold text-indigo-600 mb-4">
          Welcome Back
        </h1>

        <p className="text-center text-sm text-gray-600 mb-6">
          Login to access your account. Do not have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>

        <div className="flex flex-col gap-5">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Enter your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Enter your password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className={`w-full mt-6 py-3 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
            loader ? "cursor-not-allowed opacity-70" : "hover:shadow-lg transition-shadow"
          }`}
        >
          {loader ? "Logging In..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          By logging in, you agree to our{" "}
          <Link to="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </Link>.
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
