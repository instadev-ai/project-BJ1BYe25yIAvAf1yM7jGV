import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default PageHeader;