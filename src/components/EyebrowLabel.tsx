interface EyebrowLabelProps {
  index?: string;
  children: React.ReactNode;
  className?: string;
}

const EyebrowLabel = ({ index, children, className = "" }: EyebrowLabelProps) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-primary" />
      {index && <span className="font-mono-label text-primary">{index}</span>}
      <span className="font-mono-label text-muted-foreground">{children}</span>
    </div>
  );
};

export default EyebrowLabel;
