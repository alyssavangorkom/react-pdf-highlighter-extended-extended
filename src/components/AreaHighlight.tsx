import React, { CSSProperties, useRef } from "react";
import "../style/AreaHighlight.css";
import type { ViewportHighlight } from "../types";

/**
 * The props type for {@link AreaHighlight}.
 *
 * @category Component Properties
 */
export interface AreaHighlightProps {
  /**
   * The highlight to be rendered as an {@link AreaHighlight}.
   */
  highlight: ViewportHighlight;

  /**
   * Has the highlight been auto-scrolled into view? By default, this will render the highlight red.
   */
  isScrolledTo?: boolean;

  /**
   * Custom styling to be applied to the {@link AreaHighlight} component.
   */
  style?: CSSProperties;
}

/**
 * Renders a resizeable and interactive rectangular area for a highlight.
 *
 * @category Component
 */
export const AreaHighlight = ({
  highlight,
  isScrolledTo,
  style,
}: AreaHighlightProps) => {
  const highlightClass = isScrolledTo ? "AreaHighlight--scrolledTo" : "";

  const key = `${highlight.position.boundingRect.width}${highlight.position.boundingRect.height}${highlight.position.boundingRect.left}${highlight.position.boundingRect.top}`;
  const highlightRef = useRef<HTMLDivElement | null>(null);

  if (highlightRef.current?.firstChild) {
    const el = highlightRef.current.firstChild as HTMLElement;
    el.style.transform = `translate(${highlight.position.boundingRect.left}px, ${highlight.position.boundingRect.top}px)`;
  }

  return (
    <div className={`AreaHighlight ${highlightClass}`}>
      <div
        className="AreaHighlight__part"
        onMouseDown={(e) => e.preventDefault()}
        style={{
          position: "absolute",
          left: highlight.position.boundingRect.left,
          top: highlight.position.boundingRect.top,
          width: highlight.position.boundingRect.width,
          height: highlight.position.boundingRect.height,
          ...style,
        }}
        key={key}
      />
    </div>
  );
};
