import { useState } from "react"; // Import useState
import { FcGoogle } from "react-icons/fc"; // Import the Google icon
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-up and login

  // Function to toggle between sign-up and login
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Card className="w-full max-w-md mx-auto bg-transparent border-none px-6">
        <CardHeader className="space-y-1 p-6">
          {/* Dynamically change the header based on the view */}
          <h1 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-black bg-clip-text text-white">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </h1>
        </CardHeader>

        <CardContent className="space-y-4 p-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-800 block"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-11 bg-transparent border-green-200 focus:border-green-500 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>

          <Button
            variant="outline"
            className="w-full h-11 text-base bg-transparent text-white border-green-200 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 font-thin flex items-center justify-center space-x-2"
          >
            {isSignUp ? "Sign Up" : "Continue"}
          </Button>

          <div className="flex justify-center">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <a
                href="#"
                onClick={toggleSignUp}
                className="font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                {isSignUp ? "Log In" : "Sign Up"}
              </a>
            </p>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              {/* Adjust gap between horizontal line and 'or' */}
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-4 bg-transparent text-gray-600 font-semibold">or</span>
            </div>
          </div>

          {/* Adjust button padding and spacing */}
          <Button
            variant="outline"
            className="w-full h-11 text-base bg-transparent text-white border-green-200 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 font-thin flex items-center justify-center space-x-2"
            onClick={() => {}}
          >
            <FcGoogle className="h-5 w-5" />
            <span>Continue with Google</span>
          </Button>
        </CardContent>

        <CardFooter className="justify-center p-6 pt-0">
          <p className="text-xs text-center text-gray-500">
            By clicking continue, you agree to our{' '}
            <a href="#" className="text-green-600 hover:text-green-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-green-600 hover:text-green-700">
              Privacy Policy
            </a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Authentication;
