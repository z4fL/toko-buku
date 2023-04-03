import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Login = ({ title }) => {
  return (
    <>
      <Head title={title} />
      <div>Login</div>
    </>
  );
};

Login.layout = (page) => <MainLayout children={page} />;
export default Login;
