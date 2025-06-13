export default function AlertBox({ error, type, handleCloseAlert }: any) {
  return (
    <div
      className={`border rounded-md p-4 flex w-full items-center justify-between shadow-md hover:shadow-lg transition-all ease-in-out duration-500 ${
        error ? "block" : "hidden"
      } ${
        type === "error"
          ? "text-red-500 border-red-500 bg-red-500/10"
          : "text-yellow-500 border-yellow-500 bg-yellow-500/10"
      }`}
    >
      {error && (
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2">
            <i
              className={`far font-bold fa-exclamation-circle text-xl ${
                type === "error" ? "text-red-400" : "text-yellow-400"
              }`}
            ></i>
            <p className="text-sm font-bold text-center">{error}</p>
          </div>
          <button
            type="button"
            onClick={handleCloseAlert}
            className={`transition-colors duration-200 ${
              type === "error"
                ? "text-red-500 hover:text-red-700"
                : "text-yellow-500 hover:text-yellow-700"
            }`}
          >
            <i className="far fa-times-circle text-xl"></i>
          </button>
        </div>
      )}
    </div>
  );
}
