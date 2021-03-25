// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Eguchi Lab`,
    defaultDescription: `Eguchi Lab's homepage.`,
  },
  ja: {
    default: false,
    path: `ja`,
    locale: `ja-BR`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `ja`,
    ogLanguage: `ja_JA`,
    defaultTitle: `江口研究室`,
    defaultDescription: `広島大学　江口研究室のホームページです。`,
  },
}
