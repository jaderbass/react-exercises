import { useState } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import courses from "../data/courses";
import CourseList from "./CourseList.jsx";
import RegistrationPanel from "./RegistrationPanel.jsx";
import NameEffect from "./NameEffect.jsx";

export default function App() {
  /* ? Der Registrations-State liegt hier, weil mehrere Komponenten ihn benötigen */
  const [registrations, setRegistrations] = useState([]);

  function handleAddRegistration(
    courseId,
    participants
  ) {
    const newRegistration = {
      id: Date.now(),
      courseId,
      participants
    };

    setRegistrations([
      ...registrations,
      newRegistration
    ]);
  }

  return (
    <>
      <Header />
      <main>
        <NameEffect />
        <RegistrationPanel
          courses={courses}
          onAddRegistration={
            handleAddRegistration
          }
        />
        <CourseList
          courses={courses}
          registrations={registrations}
        />
      </main>
      <Footer />
    </>
  );
}
