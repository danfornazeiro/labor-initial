type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AppUnavailableModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-unavailable-title"
      aria-describedby="app-unavailable-desc"
    >
      <div
        className="w-full max-w-md rounded-lg bg-white shadow-xl border border-neutral-200 p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
        </div>
        <h2
          id="app-unavailable-title"
          className="text-lg font-semibold text-neutral-900"
        >
          Aplicativo indisponível
        </h2>
        <p id="app-unavailable-desc" className="mt-2 text-neutral-600">
          Ainda não há hospedagem do app. Em breve disponibilizaremos o
          download.
        </p>
        <button
          onClick={onClose}
          className="mt-5 inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 transition"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
