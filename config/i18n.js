// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Eguchi Lab`,
    defaultDescription: `Eguchi Lab's homepage`,
  },
  ja: {
    default: true,
    path: `ja`,
    locale: `ja-BR`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `ja`,
    ogLanguage: `ja_JA`,
    defaultTitle: `江口研`,
    defaultDescription: `江口研究室のホームページです`,
  },
}
