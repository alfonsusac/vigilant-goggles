"use client"

import { use, useEffect } from "react";

export function ClientComponent() {
  useEffect(() => {
    const element = document.getElementById("my-element");
    if (element) {
      const newElement = document.createElement("a");
      newElement.href = "/test";
      newElement.innerText = "Test Page";
      element.appendChild(newElement)
    }
  }, [])
  return (
    <div>
      <h1>Client Component</h1>
      <p>This is a client component.</p>
      <a href="/test">Test a tag in the client</a>
    </div>
  );
}