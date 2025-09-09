"use client";

import React from "react";
import "@/i18n"; // now guaranteed to run in client

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
