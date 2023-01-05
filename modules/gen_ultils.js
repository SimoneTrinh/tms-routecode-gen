export function generateRandomNumber(numDigits) {
  return Math.floor(
    Math.pow(10, numDigits - 1) +
      Math.random() *
        (Math.pow(10, numDigits) - Math.pow(10, numDigits - 1) - 1)
  );
}

export function generateRandomName() {
  const sampleNames = [
    "John",
    "Jane",
    "Bob",
    "Sally",
    "Tom",
    "Emily",
    "Josh",
    "Ashley",
    "Ryan",
    "Jenny",
    "Smith",
    "Jones",
    "Williams",
    "Brown",
    "Miller",
    "Davis",
    "Garcia",
    "Rodriguez",
    "Martinez",
    "Hernandez",
  ];

  const name = sampleNames[Math.floor(Math.random() * sampleNames.length)];

  return name;
}
