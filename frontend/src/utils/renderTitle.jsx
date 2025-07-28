function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  const renderTitle = (title, highlightWord) => {
    if (!highlightWord) return title;

    const wordsArray = highlightWord
      .split(",")
      .map((w) => w.trim().toLowerCase())
      .filter(Boolean);

    if (wordsArray.length === 0) return title;

    const escapedWords = wordsArray.map((word) => escapeRegExp(word));
    const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");

    const parts = title.split(regex);

    return parts.map((part, i) =>
      wordsArray.includes(part.toLowerCase()) ? (
        <span key={i} className="text-[#0A76DB]">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  export default renderTitle