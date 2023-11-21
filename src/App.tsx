import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "./components/layout/Layout";
import { Login } from "./pages/auth/login/Login";
import { SignUp } from "./pages/auth/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { UpdatePassword } from "./pages/auth/password/UpdatePassword";

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/update" element={<UpdatePassword />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
