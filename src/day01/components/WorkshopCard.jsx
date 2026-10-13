export default function WorkshopCard({
  title,
  trainer,
  duration,
  level,
  online
}) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{trainer}</p>
      <p>Niveau: {level}</p>
      <p>Dauer: {duration} UE {duration === 16 ? "(2 Tage)" : ""}</p>
      <p>{online ? "Online möglich" : "Nur Präsenz"}</p>
    </article>
  );
}