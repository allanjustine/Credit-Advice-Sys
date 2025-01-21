export default function Button({ children, customClass, ...props }: any) {
  return <button {...props} className={`rounded p-2 ${customClass}`}>{children}</button>;
}
