export const formatDate = (dateString) => {
  if (!dateString) return "No deadline";
  const date = new Date(dateString);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const isDeadlinePassed = (deadline) => {
  if (!deadline) return false;
  return new Date(deadline).getTime() < Date.now();
};