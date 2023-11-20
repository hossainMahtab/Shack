import { IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = (props) => {
  const handleClose = () => {
    props.handleSignInClose();
  };
  const handleSignUp = () => {
    props.handleSignUpOpen();
  };

  // form submission

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const auth = getAuth();

  const handleSignInSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignInSubmit)}
        className="w-full h-full relative z-[1111]"
      >
        <div className="absolute top-5 right-5">
          <div
            onClick={handleClose}
            className="bg-transparent text-white font-bold p-2  hover:rounded-full hover:bg-white hover:text-[#e4ae62]"
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full py-10 px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="/logo/shack-logo-2.png"
              alt="logo"
              className="w-24 lg:w-32  xl:w-36 h-8 lg:h-10 xl:h-12 z-[9999]"
            />{" "}
            <h2 className="text-xl text-white font-bold ">
              Sign in to your account
            </h2>
          </div>
          <div className="w-full flex flex-col gap-4 items-center justify-center mt-6">
            <div className="w-full flex flex-col gap-2 items-center justify-center">
              <TextField
                // required
                fullWidth
                type="email"
                className="!w-full !h-full !rounded-md custom-mui-input !bg-inherit !font-bold"
                sx={{
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
                // name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                label="Email"
                // id="outlined-basic"
                variant="outlined"
              />
              {errors.email && (
                <p className="text-[#e4ae62]">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 items-center justify-center">
              <div className="w-full flex flex-col gap-2 items-center justify-center">
                <TextField
                  // required
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  className="!w-full !h-full !rounded-md custom-mui-input !bg-inherit !font-bold"
                  sx={{
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },

                    "& .MuiInputBase-root": {
                      "& input": {
                        color: "white",
                      },
                    },

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                  // name="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  label="Password"
                  // id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          className="!text-white"
                          onClick={handleTogglePassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && (
                  <p className="text-[#e4ae62]">{errors.password.message}</p>
                )}
              </div>
              <div className="w-full flex  items-center justify-end ">
                {/* <FormGroup className="!text-xs lg:!text-sm !text-left !hidden">
                <FormControlLabel
                  sx={{
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  }}
                  control={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                      defaultChecked
                    />
                  }
                  label="Remember me"
                />
              </FormGroup> */}
                <p className="text-white  font-bold">Forgot Password?</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3.5  rounded-md bg-[#e4ae62] text-white font-bold cursor-pointer"
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-wrap gap-0.5 lg:gap-1 items-center justify-center text-center mt-6">
            <h2 className="text-xl text-white font-bold">
              Don't have an account?{" "}
            </h2>
            <p
              onClick={handleSignUp}
              className="bg-transparent text-xl font-bold   text-[#e4ae62] cursor-pointer"
            >
              Sign Up
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;