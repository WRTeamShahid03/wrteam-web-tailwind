"use client";

import React from "react";
import CareerForm from "./CareerForm";

interface Vacancy {
  id: number;
  title: string;
  experience: string;
}

export default function CareerFormWrapper({
  vacancies,
}: {
  vacancies: Vacancy[];
}) {
  return <CareerForm currentVacancy={vacancies} />;
}
