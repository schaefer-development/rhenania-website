import { gql } from '$lib/helpers';
export const PAGE = gql`
	fragment linkFragment on Link {
		id
		label
		module {
			__typename
			... on Eyecatcher {
				id
				page {
					slug
				}
			}
			... on CardsContainer {
				id
				page {
					slug
				}
			}
			... on Text {
				id
				page {
					slug
				}
			}
			... on ArticleHeroTeaser {
				id
				page {
					slug
				}
			}
			... on FaqContainer {
				id
				page {
					slug
				}
			}
		}
	}

	query ($slug: String!) {
		page(where: { slug: $slug }) {
			id
			slug
			modules {
				__typename
				... on Divider {
					id
					padding
				}
				... on Eyecatcher {
					id
					headline
					subheadline
					image {
						id
						url
					}
				}
				... on FaqContainer {
					id
					faqItems {
						id
						question
						answer {
							html
						}
					}
				}
				... on HeroImage {
					id
					image {
						id
						url
					}
					strokeColor {
						hex
						rgba {
							r
							g
							b
							a
						}
					}
					icon {
						id
						url
					}
				}
				... on Text {
					id
					heading1
					heading2
					heading3
					text {
						html
					}
				}
				... on ArticleHeroTeaser {
					id
					headline
					subheadline
					teaserText
					heroBackgroundImage {
						id
						url
					}
				}
				... on CardsContainer {
					id
					headline
					cards {
						__typename
						... on CardImage {
							id
							headline
							image {
								id
								url
							}
							link {
								...linkFragment
							}
						}
						... on CardIcon {
							id
							backgroundColor {
								hex
								rgba {
									r
									g
									b
									a
								}
							}
							icon {
								id
								url
							}
							headline
							subheadline
							link {
								...linkFragment
							}
						}
					}
				}
			}
		}
	}
`;
