import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { icons } from "lucide-react";

const Authentication = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 via-green-800 to-black">
      <Card className="w-full max-w-md mx-auto bg-transparent    border-none">
        <CardHeader className="space-y-1 p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-black bg-clip-text text-black">
            Welcome Back
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
            className="w-full h-11 text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-none"
          >
            Continue
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-green-200" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2 bg-white text-gray-600">or</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full h-11 text-base border-green-200 hover:bg-green-50 text-gray-700"
            onClick={() => {}}
          >
            <icons.Chrome className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
        </CardContent>

        <CardFooter className="justify-center p-6 pt-0">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a 
              href="#" 
              className="font-semibold text-green-600 hover:text-green-700 transition-colors"
            >
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Authentication;
