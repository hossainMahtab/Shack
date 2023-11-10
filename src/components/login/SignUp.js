import { TextField } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SignUp = (props) => {
  const handleClose = () => {
    // props.handleSignUpClose();
    props.handleSignUpClose();
  };

  const handleSignIn = () => {
    props.handleSignInOpen();
  };
  return (
    <form className="w-full h-full relative ">
      <div className="absolute top-5 right-5">
        <button
          onClick={handleClose}
          className="bg-transparent text-white font-bold p-2  hover:rounded-full hover:bg-white hover:text-[#e4ae62]"
        >
          <AiOutlineClose size={20} />
        </button>
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
        <div className="w-full flex flex-col items-center justify-center mt-6">
          <div className="w-full flex flex-col items-center justify-center">
            <TextField
              fullWidth
              type="text"
              className="!w-full !h-full rounded-md  !bg-inherit !font-bold"
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
              name="name"
              label="Name"
              id="outlined-basic"
              variant="outlined"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <TextField
              fullWidth
              type="email"
              className="!w-full !h-full rounded-md  !bg-inherit !font-bold"
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
              name="email"
              label="Email"
              id="outlined-basic"
              variant="outlined"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <div className="w-full flex flex-col items-center justify-center">
              <TextField
                fullWidth
                type="password"
                className="!w-full !h-full rounded-md  !bg-inherit !font-bold"
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
                name="password"
                label="Password"
                id="outlined-basic"
                variant="outlined"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <div className="w-full flex flex-col items-center justify-center">
              <TextField
                fullWidth
                type="password"
                className="!w-full !h-full rounded-md  !bg-inherit !font-bold"
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
                name="confirm password"
                label="Confirm Password"
                id="outlined-basic"
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-6">
          <button className="w-full py-3.5  rounded-md bg-[#e4ae62] text-white font-bold cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-6">
          <h2 className="text-xl text-white font-bold">
            Already have an account?{" "}
            <button
              onClick={handleSignIn}
              className="bg-transparent  text-[#e4ae62] cursor-pointer"
            >
              Sign In
            </button>
          </h2>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
