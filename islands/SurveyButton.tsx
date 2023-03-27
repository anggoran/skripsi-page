export default function SurveyButton() {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          window.location.href = "/anggoran";
        }}
        className="select-none bg-gray-50 text-gray-900 ring-1 ring-gray-500 rounded-full px-4 py-2 shadow-lg active:text-red-500 active:shadow-inner"
      >
        Terima Kasih ❤️
      </button>
    </div>
  );
}
