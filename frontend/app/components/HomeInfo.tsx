import type { ReactElement } from "react";

export function HomeInfo({
  children,
  icon,
  title,
}: {
  children: string;
  icon: string;
  title: string;
}): ReactElement {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
