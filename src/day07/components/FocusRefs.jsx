import { useRef } from "react";

function FocusRefs() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleFocusName() {
    nameRef.current?.focus();
  }

  function handleFocusEmail() {
    emailRef.current?.focus();
  }
  return (
    <section>
      <h2>FocusRefs Demo</h2>

      <input
        ref={nameRef}
        type="text"
      />

      <input
        ref={emailRef}
        type="email"
      />

      <button
        type="button"
        onClick={handleFocusName}
      >
        Name fokussieren
      </button>

      <button
        type="button"
        onClick={handleFocusEmail}
      >
        Email fokussieren
      </button>

    </section>
  );
}

export default FocusRefs;