"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/features/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] rounded-2xl bg-snow animate-pulse" />
  ),
});

export function MapWrapper({ className }: { className?: string }) {
  return (
    <div className={className}>
      <LeafletMap />
    </div>
  );
}
