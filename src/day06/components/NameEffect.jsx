import { useEffect, useState } from "react";

export default function NameEffect() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title =
      name === ""
        ? "React Exercises"
        : `Hallo ${name}`;
  }, [name]);

  return (
    <section>
      <h2>NameEffect</h2>

      <label htmlFor="effect-name">
        Name
      </label>

      <input
        id="effect-name"
        type="text"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
      />
    </section>
  );
}
