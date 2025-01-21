export default function CardFooter({ children, customClass, ...props }: any) {
  return (
    <div {...props} className={`${customClass}`}>
      {children}
    </div>
  );
}
