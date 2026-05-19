import { useEffect, useId, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useClickOutside } from "@shared/hooks/useClickOutside";
import { useMovieSuggestions } from "./model/useMovieSuggestions";
import { useKeyboardNavigation } from "./model/useKeyboardNavogation";

import styles from "./Combobox.module.scss";

export function Combobox() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [input, setInput] = useState(query);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const containerRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const suggestionsRef = useRef<HTMLUListElement | null>(null);

  const debouncedInput = useDebounce(input, 400);
  const suggestions = useMovieSuggestions(debouncedInput);

  const id = useId();
  const ids = {
    input: `${id}-input`,
    list: `${id}-list`,
    option: (i: number) => `${id}-option-${i}`,
  };

  const hasQuery = debouncedInput.trim().length > 0;
  const hasSuggestions = suggestions.length > 0;
  const suggestionsOpen = isOpen && hasQuery;
  const showNotFound = hasQuery && !hasSuggestions;

  useEffect(() => {
    setInput(query);
  }, [query]);

  const closeSuggestions = () => {
    setIsOpen(false);

    setHighlightedIndex(-1);
  };

  const clearSearch = () => {
    setInput("");
    setIsOpen(false);
  };

  const focusInput = () => inputRef.current?.focus();

  const applySearch = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setSearchParams({});
    } else {
      setSearchParams({ q: trimmed });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setIsOpen(!!value);
    setHighlightedIndex(-1);
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    applySearch(input);
    setIsOpen(false);
  };

  const handleSelect = (title: string) => {
    setInput(title);
    applySearch(title);
    closeSuggestions();
  };

  // useEffect(() => {
  //   const value = debouncedInput.trim();

  //   if (!value) {
  //     setSearchParams({});
  //     return;
  //   }

  //   setSearchParams({ q: value });
  // }, [debouncedInput, setSearchParams]);
  // const onKeyDown = useKeyboardNavigation({

  // })
  const onHighlight = (i: number) => setHighlightedIndex(i);

  const onKeyDown = useKeyboardNavigation({
    suggestions,
    suggestionsRef,
    highlightedIndex,
    onSelect: handleSelect,
    onEscape: closeSuggestions,
    onHighlight,
  });

  useClickOutside(containerRef, closeSuggestions);

  return (
    <form className={styles.search} onSubmit={handleSubmit} ref={containerRef}>
      <label htmlFor={ids.input} className="visually-hidden">
        Search movie
      </label>

      <div className={styles.searchField}>
        <FiSearch
          className={styles.searchIcon}
          onClick={focusInput}
          size={18}
        />

        <input
          role="combobox"
          type="text"
          id={ids.input}
          aria-controls={ids.list}
          aria-autocomplete="list"
          aria-labelledby="Search todo"
          autoComplete="off"
          ref={inputRef}
          disabled={false}
          className={styles.input}
          placeholder="Search todo..."
          value={input}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={onKeyDown}
        />

        {hasQuery && (
          <button type="button" className={styles.clear} onClick={clearSearch}>
            <FiX size={18} />
          </button>
        )}
      </div>

      <ul
        className={`${styles.suggestions} ${suggestionsOpen ? styles.open : ""}`}
        id={ids.list}
        ref={suggestionsRef}
      >
        {showNotFound && (
          <li className={styles.suggestion} onClick={clearSearch}>
            Not found
          </li>
        )}
        {suggestions.map((item, index) => (
          <li
            key={index}
            role="option"
            aria-selected={highlightedIndex === index}
            id={ids.option(index)}
            className={styles.suggestion}
            onMouseDown={() => handleSelect(item)}
            data-highlighted={highlightedIndex === index}
          >
            <span>{item}</span>
            <span className={styles.tooltip}>Enter</span>
          </li>
        ))}
      </ul>
    </form>
  );
}
