import CourseCard from "./CourseCard.jsx";

export default function CourseList({
  courses,
  registrations
}) {
  return (
    <section className="course-list">
      <h2>Kurse</h2>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          registrations={
            registrations
          }
        />
      ))}
    </section>
  );
}
