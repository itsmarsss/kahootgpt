export function handleContactClick() {
  const email = "itsmarzzzzzz@protonmail.com";
  const encodedEmail = encodeURIComponent(email);
  window.location.href = `mailto:${encodedEmail}`;
}
