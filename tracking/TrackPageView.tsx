"use client";

import { PageViews } from "@piwikpro/tracking-base-library";

import { useEffect } from "react";

export default function TrackPageView({ label }: { label: string }) {
  useEffect(() => {
    PageViews.trackPageView(label);
  }, [label]);
  return null;
}
