export default function Card({ children, customClass, ...props }: any) {
  return (
    <div
      {...props}
      className={`border border-gray-200 dark:border-gray-600 ${customClass}`}
    >
      {children}
    </div>
  );
}
