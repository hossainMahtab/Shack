import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "@/context/FireAuthContext";

const SignUp = (props) => {
  const handleClose = () => {
    // props.handleSignUpClose();
    props.handleSignUpClose();
  };

  const handleSignIn = () => {
    props.handleSignInOpen();
  };

  //signup form submission

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { user, googleSignIn, logOut, emailSignUp } = UserAuth();

  const handleSignUpSubmit = async (data) => {
    console.log(data);
    try {
      await emailSignUp(data.email, data.password, data.name);
    } catch (error) {
      console.log(error);
    }
  };

  const password = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="w-full h-full relative "
      onSubmit={handleSubmit(handleSignUpSubmit)}
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
            Sign Up to your account
          </h2>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center mt-6">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <TextField
              fullWidth
              type="text"
              className="!w-full !h-full rounded-md custom-mui-input !bg-inherit !font-bold"
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
              // name="name"
              {...register("name", {
                required: "Name is required",
              })}
              label="Name"
              variant="outlined"
            />
            {errors.name && (
              <p className="text-[#e4ae62]">{errors.name.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <TextField
              fullWidth
              type="email"
              className="!w-full !h-full rounded-md custom-mui-input !bg-inherit !font-bold"
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
              variant="outlined"
            />
            {errors.email && (
              <p className="text-[#e4ae62]">{errors.email.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <TextField
              fullWidth
              // type="password"
              type={showPassword ? "text" : "password"}
              className="!w-full !h-full rounded-md custom-mui-input  !bg-inherit !font-bold"
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
              // name="password"
              {...register("password", {
                required: "Password is required",
              })}
              label="Password"
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
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              className="!w-full !h-full rounded-md custom-mui-input  !bg-inherit !font-bold"
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
              // name="confirm password"
              {...register("confirmpass", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              label="Confirm Password"
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
            {errors.confirmpass && (
              <p className="text-[#e4ae62]">{errors.confirmpass.message}</p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-6">
          <button
            type="submit"
            className="w-full py-3.5  rounded-md bg-[#e4ae62] text-white font-bold cursor-pointer"
          >
            Sign Up
          </button>
        </div>
        <div className="flex flex-wrap gap-0.5 lg:gap-1 items-center justify-center text-center mt-6">
          <h2 className="text-xl text-white font-bold">
            Already have an account?{" "}
          </h2>
          <p
            onClick={handleSignIn}
            className="bg-transparent text-xl font-bold   text-[#e4ae62] cursor-pointer"
          >
            Sign In
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
