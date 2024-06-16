"use client";

import React, { useState, useRef, useEffect } from "react";

type DynamicTextareaProps = {
  name?: string;
  placeholder?: string;
  className?: string;
};

export const DynamicTextarea = ({
  name,
  placeholder,
  className,
}: DynamicTextareaProps) => {
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <textarea
      ref={textareaRef}
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={(event) => setContent(event.target.value)}
      className={`w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      required
      rows={1}
    />
  );
};
