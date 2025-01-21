export default function CardBody({ children, customClass, ...props }: any) {
  return (
    <div {...props} className={`${customClass}`}>
      {children}
    </div>
  );
}
