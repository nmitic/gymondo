export const homeRequestQuery = `
  query HomeQuery($slug: String) {
    landingPage(where: {slug: $slug}) {
      heroImage {
        url
      }
      ctaButtonLabel
      imageHeroText {
        html
      }
    }
  }
`;