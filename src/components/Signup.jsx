import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const { signUpNewUser } = UserAuth()
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await signUpNewUser({ email, password });

      if (result.success) {
        console.log("User signed up successfully: ", result.data);
        navigate("/dashboard");
      }
    } catch (error) {
      setError("There was an error signing up. Please try again.");
      console.log("There was an error signing up: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have and account? <Link to="/signin">Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input placeholder="Email" className="p-3 mt-6" type="email" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" className="p-3 mt-6" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading} className="mt-6 w-full">Sign up</button>
          {error && <p className="text-red-500 text-center pt-4">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
