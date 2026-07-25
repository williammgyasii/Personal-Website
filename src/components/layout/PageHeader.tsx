import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
      <motion.p
        className="mb-4 text-xs tracking-tight text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {label}
      </motion.p>
      <motion.h1
        className="mb-5 max-w-3xl text-[clamp(2rem,7vw,4.5rem)] font-semibold leading-tight tracking-tighter"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          className="max-w-2xl text-sm leading-relaxed text-muted"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
