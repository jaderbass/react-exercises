import sessions from "../data/sessions.js";
import SessionCard from "./SessionCard.jsx";

function Schedule() {
  return (
    <section>
      <h2>Conference Schedule</h2>

      <div className="session-list">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            title={session.title}
            speaker={session.speaker}
            room={session.room}
            time={session.time}
            track={session.track}
            level={session.level}
            online={session.online}
            seats={session.seats}
            highlight={session.highlight}
          />
        ))}
      </div>
    </section>
  );
}

export default Schedule;
