/**
 * Merge multiple Tailwind CSS classes conditionally.
 * Example: cn("p-4", isActive && "bg-brand-700", !isActive && "bg-gray-500")
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a timestamp or date string into a readable format.
 * Example: formatDate(1690000000000) -> "July 22, 2023"
 */
export function formatDate(dateInput) {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generate initials from a name for Avatars.
 * Example: getInitials("Ahmed Raza") -> "AR"
 */
export function getInitials(name = "") {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}