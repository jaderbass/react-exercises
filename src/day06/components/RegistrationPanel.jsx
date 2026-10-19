import { useState } from "react";

export default function RegistrationPanel({
  courses,
  onAddRegistration
}) {
  const [courseId, setCourseId] =
    useState("");

  const [participants, setParticipants] =
    useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (courseId === "") {
      return;
    }

    onAddRegistration(
      Number(courseId),
      participants
    );

    setCourseId("");
    setParticipants(1);
  }

  return (
    <section>
      <h2>Teilnahme anmelden</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="course">
            Kurs
          </label>

          <select
            id="course"
            value={courseId}
            onChange={(event) =>
              setCourseId(
                event.target.value
              )
            }
          >
            <option value="">
              Bitte auswählen
            </option>

            {courses.map((course) => (
              <option
                key={course.id}
                value={course.id}
              >
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="participants">
            Teilnehmer
          </label>

          <input
            id="participants"
            type="number"
            min="1"
            value={participants}
            onChange={(event) =>
              setParticipants(
                Number(
                  event.target.value
                )
              )
            }
          />
        </div>

        <button type="submit">
          Registrierung hinzufügen
        </button>
      </form>
    </section>
  );
}
