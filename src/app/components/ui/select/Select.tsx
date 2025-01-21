export default function Select({
  children,
  customClass,
  error,
  icon,
  ...props
}: any) {
  return (
    <div className="relative">
      <select
        {...props}
        className={`pl-12 w-full rounded p-2.5 focus:outline-none focus:ring-1 hover:ring-1 hover:ring-blue-300 hover:shadow-md hover:shadow-blue-300 focus:ring-blue-400 bg-gray-200 border dark:bg-gray-700 dark:text-white text-black transition-colors duration-200 ${customClass} ${
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      >
        {children}
      </select>
      <i
        className={`far fa-${icon} text-gray-500 absolute left-3 border-r pr-2 top-3 border-gray-500`}
      ></i>
    </div>
  );
}
