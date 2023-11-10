import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import CommonModal from "../shared/modal/CommonModal";
import SignUp from "./SignUp";

const SignIn = (props) => {
  const handleClose = () => {
    props.handleSignInClose();
  };
  const handleSignUp = () => {
    props.handleSignUpOpen();
  };

  return (
    <>
      <form className="w-full h-full relative z-[1111]">
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
              Sign in to your account
            </h2>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-6">
            <div className="w-full flex flex-col items-center justify-center">
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
              <div className="w-full flex  items-center justify-end mt-4">
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
            <button className="w-full py-3.5  rounded-md bg-[#e4ae62] text-white font-bold cursor-pointer">
              Sign In
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <h2 className="text-xl text-white font-bold">
              Don't have an account?{" "}
              <button
                onClick={handleSignUp}
                className="bg-transparent  text-[#e4ae62] cursor-pointer"
              >
                Sign Up
              </button>
            </h2>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
