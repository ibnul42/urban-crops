"use client";
import { useTranslation } from "react-i18next";

interface TranslatedTextProps {
  name: string; // e.g. "faq.items.0.answer" or "faq.title"
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ name }) => {
  const { t } = useTranslation();

  // i18next doesn't like keys with [0], so we normalize them:
  const normalizedKey = name.replace(/\[(\d+)\]/g, ".$1");

  return <>{t(normalizedKey)}</>;
};

export default TranslatedText;
