import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { asset } from '../lib/paths.js';

export function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = index == null ? null : items[index];

  useEffect(() => {
    if (item == null) return undefined;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-yellow px-3 py-2 text-sm font-bold text-ink"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            Prev
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-yellow px-3 py-2 text-sm font-bold text-ink"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            Next
          </button>
          <motion.img
            key={item.src}
            src={asset(item.src)}
            alt={item.alt}
            className="max-h-[82vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
