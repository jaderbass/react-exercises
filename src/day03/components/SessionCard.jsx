function SessionCard({
  title,
  speaker,
  room,
  time,
  track,
  level,
  online,
  seats,
  highlight
}) {
  const cardClassName =
    seats === 0
      ? "session-card session-card-sold-out"
      : "session-card";

  return (
    <article className={cardClassName}>
      {highlight && <p>Highlight</p>}

      <h3>{title}</h3>

      <p>Speaker: {speaker}</p>
      <p>Zeit: {time}</p>
      <p>Track: {track}</p>
      <p>Level: {level}</p>
      <p>Ort: {online ? "Online" : room}</p>

      <p>
        {seats > 0
          ? `${seats} Plätze frei`
          : "Ausgebucht"}
      </p>

      <button disabled={seats === 0}>
        Session auswählen
      </button>
    </article>
  );
}

export default SessionCard;
