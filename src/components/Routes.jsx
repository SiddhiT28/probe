import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Results } from "./Results";

export const Rout = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route path={"/search"} element={<Results />} />
        <Route path={"/video"} element={<Results />} />
        <Route path={"/image"} element={<Results />} />
        <Route path={"/news"} element={<Results />} />
        <Route path={"/videos"} element={<Results />} />
      </Routes>
    </div>
  );
};
