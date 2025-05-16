export function Input({ className = '', ...props }: any) {
  return <input className={`px-3 py-2 rounded w-full ${className}`} {...props} />;
}