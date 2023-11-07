import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Checkbox from "@/components/ui/Checkbox";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";


const schema = yup
  .object({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const LoginForm = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const router = useRouter();
  async function onSubmit(data) {
    try {
      let response = await fetch("http://localhost:8000/login/activesession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      }).then(async function(result) {
        const rez = await result.json();
        console.log(rez)
      })

    } catch (error) {
      
    }

    try {
      // console.log(data)
      let response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });
      // const response = await fetch("http://localhost:8000/users", {
      //   method: "GET",
      // });
      // console.log(response)
      if (!response.ok) throw new Error("Login failed");
      const res = await response.json()
      
      const token = res.token
      // console.log(token)
      document.cookie = `token=${token}; path=/`;
      // router.push("/dashboard");
      dispatch(handleLogin(true));
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [checked, setChecked] = useState(false);
  const handleButton = async () => {
    // const result = await MessageBox.open({
    //   title: "Confirm",
    //   content: <p>Are you sure about something?</p>,
    //   buttons: [
    //     { name: "Yes", handler: () => "yes" },
    //     { name: "Nevermind", handler: () => "nope" }
    //   ]
    // });
    // setResult(result);
  };
  const [username, setUsername] = useState('');

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  }
  const [password, setPassword] = useState('');

  const handleChangePassword = event => {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <Textinput
        name="username"
        label="username"
        placeholder="demo"
        onChange={handleChangeUsername}
        type="text"
        register={register}
        error={errors?.username}
      />
      <Textinput
        name="password"
        label="password"
        onChange={handleChangePassword}
        type="password"
        placeholder="password"
        register={register}
        error={errors.password}
      />
      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        {/* <Link
          href="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?{" "}
        </Link> */}
      </div>
      <Modal
            title="Sign in"
            label="Sign in"
            labelClass="btn btn-dark block w-full text-center"
            uncontrol
            centered
            show={true}
            username={username}
            password={password}
            footerContent={
              <Button
                text="Lanjutkan"
                className="btn-dark "
                onClick={
                  handleSubmit(onSubmit)
                }
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              User telah login. Ingin Lanjutkan ?
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              Aksi ini akan mengeluarkan user yang sudah login sebelumnya.
            </div>
          </Modal>
      {/* <button className="btn btn-dark block w-full text-center">Sign in</button> */}
      
    </form>
  );
};

export default LoginForm;
