import { ModeToggle } from "@/components/DarkMode/mode-toggle";

import { NewTransactionModal } from "@/components/NewTransactionModal.tsx";

export function Header() {
  return (
    <header className="w-screen items-center px-4 py-5 flex justify-between align-items border-b border-collapse">
      <h1 className="text-primary font-bold text-xl w-10">
        <strong className="text-secondary-foreground">Control</strong>Finance
      </h1>
      <div className="flex gap-4">
        <NewTransactionModal />
        <ModeToggle />
      </div>
    </header>
  );
}
