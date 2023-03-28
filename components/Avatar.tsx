export default function Avatar() {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <img
        className="rounded-full"
        src="/avatar.svg"
        width="50"
        height="50"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <h5 className="text-gray-900">Muhammad Anggoran Iwari</h5>
        <h6 className="text-gray-500 font-light text-sm">Maret 28, 2023</h6>
      </div>
    </div>
  );
}
