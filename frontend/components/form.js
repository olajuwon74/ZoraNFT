/** @jsxImportSource @compiled/react */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useNFT from "../utils/web3/tokens";
import { useAppContext } from "../context/state";
import { useRouter } from "next/router";

export default function Form() {
  const { connected, setLoading } = useAppContext();
  const router = useRouter();

  const { mintNFt } = useNFT();

  // form validation rules
  const validationSchema = Yup.object().shape({
    matricNumber: Yup.string().required("Matriculation Number is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    setLoading(true);
    await mintNFt(data.matricNumber.toString());
    setLoading(false);
    reset();
    router.push("/token");
    return false;
  };
  return (
    <div css={{ width: "100%" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={{
          width: "100%",
          backgroundColor: "#181350",
          display: "flex",
          padding: "124px 0px 47px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          css={{
            backgroundColor: "rgba(54, 113, 202, 0.15)",
            borderRadius: "5px",
            padding: "119px 50px",
            maxWidth: "1056px",
            width: "100%",
            margin: "auto",
          }}
        >
          <input
            name="matricNumber"
            placeholder="Enter matric number"
            {...register("matricNumber")}
            type="number"
            css={{
              backgroundColor: "transparent",
              height: "64px",
              width: "100%",
              borderColor: "#3671CA",
              color: "#FFFFFF",
              borderRadius: "5px",
              fontSize: "16px",
              lineHeight: "22px",
              marginBottom: "40px",
              borderWidth: "2px",
              padding: "16px 30px",
            }}
          ></input>
          <div
            css={{
              color: "red",
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            {errors.matricNumber?.message}
          </div>
          <input
            name="password"
            placeholder="Enter your password"
            {...register("password")}
            type="password"
            css={{
              backgroundColor: "transparent",
              height: "64px",
              width: "100%",
              borderColor: "#3671CA",
              color: "#FFFFFF",
              borderRadius: "5px",
              fontSize: "16px",
              lineHeight: "22px",
              borderWidth: "2px",
              padding: "16px 30px",
            }}
          ></input>
          <div
            css={{
              color: "red",
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            {errors.password?.message}
          </div>
        </div>
        <button
          disabled={!connected}
          css={{
            marginTop: "76px",
            borderColor: "#3671CA",
            borderWidth: "0px",
            padding: "19px 0px",
            maxWidth: "238px",
            width: "100%",
            fontSize: "18px",
            color: "#3671CA",
            fontWeight: "600",
            lineHeight: "22px",
            fontFamily: "Montserrat",
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          Generate Transcript
        </button>
      </form>
    </div>
  );
}
