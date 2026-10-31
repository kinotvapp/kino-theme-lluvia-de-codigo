// A theme's presentation, drawn with the screen kit in whichever theme is active.
const THEME = {"id": "lluvia-de-codigo", "es": "Lluvia de Código", "en": "Code Rain", "hook": "Sigue al conejo blanco.", "hookEn": "Follow the white rabbit.", "desc": "Verde fósforo sobre negro total, como si la realidad fuera una simulación."};
const t = (es, en) => ({ text: es, textEn: en });

export async function screen({ activeTheme }) {
  const on = activeTheme === THEME.id;
  return {
    type: "Column", padding: { compact: 16, expanded: 32 }, gap: 16,
    children: [
      { type: "Text", ...t(THEME.es, THEME.en), style: "h1" },
      { type: "Text", ...t(THEME.hook, THEME.hookEn), style: "h3", color: "primary" },
      { type: "Text", text: THEME.desc },
      { type: "Card", children: [{ type: "Column", gap: 12, children: [
        { type: "Text", ...t("Qué cambia", "What changes"), style: "h3" },
        { type: "Text", ...t("Tarjetas, botones y barras toman su color y sus formas.", "Cards, buttons and bars take its colour and shapes."), color: "muted" },
      ] }] },
      {
        type: "ElevatedButton",
        labelText: on ? "Desactivar" : "Activar",
        labelTextEn: on ? "Turn off" : "Turn on",
        onPressed: { go: { useTheme: { theme: on ? null : THEME.id } } },
      },
    ],
  };
}

export async function screenEvent() {
  return null;
}
