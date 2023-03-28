export default function SurveyButton() {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          window.location.href = "/anggoran";
        }}
        className="select-none rounded-full shadow-lg px-4 py-2 text-gray-900 ring-1 ring-gray-500 active:text-red-500 active:shadow-inner"
      >
        Terima Kasih ❤️
      </button>
    </div>
  );
}
