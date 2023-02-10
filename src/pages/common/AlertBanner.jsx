import Alert from "react-bootstrap/Alert";

export default function AlertBanner({ message, variant }) {
  // updated to message to a single word, just to rule out issues with whitespace / newlines
  const alertMessage = message || "unexpected";
  const alertVariant = variant || "danger";
  // TODO: remove this console.log
  console.log(`alertMessage: ${alertMessage}`);

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
