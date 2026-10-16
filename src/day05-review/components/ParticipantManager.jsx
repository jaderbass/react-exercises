import { useState } from "react";

function ParticipantManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1
  });

  const [participantsList, setParticipantsList] =
    useState([]);

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    const newValue =
      name === "participants"
        ? Number(value)
        : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === ""
    ) {
      setError(
        "Bitte Name und E-Mail-Adresse eingeben."
      );
      return;
    }

    const participant = {
      id: Date.now(),
      ...formData
    };

    setParticipantsList([
      ...participantsList,
      participant
    ]);

    setFormData({
      name: "",
      email: "",
      participants: 1
    });
  }

  return (
    <section>
      <h2>Teilnehmerverwaltung</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
          </label>{" "}
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">
            E-Mail
          </label>{" "}
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="participants">
            Personen
          </label>{" "}
          <input
            id="participants"
            name="participants"
            type="number"
            min="1"
            value={formData.participants}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          Hinzufügen
        </button>
      </form>

      <p>
        Einträge: {participantsList.length}
      </p>

      {participantsList.map((participant) => (
        <article key={participant.id}>
          <h3>{participant.name}</h3>
          <p>{participant.email}</p>
          <p>
            Personen: {participant.participants}
          </p>
        </article>
      ))}
    </section>
  );
}

export default ParticipantManager;
