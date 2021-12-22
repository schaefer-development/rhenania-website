import { gql } from '$lib/helpers';
export const PAGE = gql`
	fragment linkFragment on Link {
		id
		label
		target {
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
			... on HeroImage {
				id
				page {
					slug
				}
			}
			... on FullWidthImage {
				id
				page {
					slug
				}
			}
			... on Image {
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
					paddingTop
					paddingBottom
					image {
						id
						url
					}
				}
				... on FaqContainer {
					id
					headline
					paddingTop
					paddingBottom
					faqItems {
						id
						question
						answer {
							html
						}
					}
				}
				... on FullWidthImage {
					id
					paddingTop
					paddingBottom
					image {
						id
						url
					}
				}
				... on Image {
					id
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
					paddingTop
					paddingBottom
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
					paddingTop
					paddingBottom
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
