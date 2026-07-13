"use client";

export default function ScrollToImages() {
  const handleClick = () => {
    document.getElementById("project-images")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <button
      type="button"
      className="project-scroll"
      onClick={handleClick}
      aria-label="Scroll to project images"
    >
      <span className="button-arrow" aria-hidden="true" />
    </button>
  );
}