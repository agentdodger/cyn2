export function Card({ children, className = '' }: any) {
  return <div className={`bg-white bg-opacity-10 rounded-xl p-6 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }: any) {
  return <div className={className}>{children}</div>;
}