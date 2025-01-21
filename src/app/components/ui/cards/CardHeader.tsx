export default function CardHeader({ children, customClass, ...props }: any) {
  return (
    <div {...props} className={`font-bold ${customClass}`}>
      {children}
    </div>
  );
}
