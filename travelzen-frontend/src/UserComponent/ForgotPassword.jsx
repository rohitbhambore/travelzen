import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetLink, setResetLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.text();
      toast.success(result);

      // Generate the reset link and display it on the same page
      const token = result.split(" ")[3]; // Extract the token from the response
      const link = `http://localhost:3000/reset-password?token=${token}`;
      setResetLink(link);
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card form-card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Forgot Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn bg-color text-white w-100 mt-3">
                  Send Reset Link
                </button>
              </form>

              {/* Display the reset link */}
              {resetLink && (
                <div className="mt-3 text-center">
                  <p>Reset Link:</p>
                  <Link to={resetLink} className="text-color-second">
                    Click here to reset your password
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;