export default function CourseCard({
  course,
  registrations
}) {

  /* ? Die Registrierungen eines einzelnen Kurses sind abgeleitet. */
  const courseRegistrations =
    registrations.filter(
      (registration) =>
        registration.courseId === course.id
    );

  /* ? Auch die Teilnehmerzahl wird nur berechnet. */
  const participantCount =
    courseRegistrations.reduce(
      (sum, registration) =>
        sum +
        Number(
          registration.participants
        ),
      0
    );

  /* ? Diese beiden Konstanten sind ebenfalls abgeleitete Werte */
  const freeSeats = course.seats - participantCount;

  const isFullyBooked = freeSeats <= 0;

  return (
    <article className="course-card">
      <h3>{course.title}</h3>

      <p>
        Plätze insgesamt:
        {" "}
        {course.seats}
      </p>

      <p>
        Registrierungen:
        {" "}
        {courseRegistrations.length}
      </p>

      <p>
        Teilnehmer:
        {" "}
        {participantCount}
      </p>

      <p>
        Freie Plätze:
        {" "}
        {Math.max(
          freeSeats,
          0
        )}
      </p>

      {isFullyBooked && (
        <p>
          <strong>
            Ausgebucht
          </strong>
        </p>
      )}
    </article>
  );
}
