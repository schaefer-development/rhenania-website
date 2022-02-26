import { gql } from '$lib/helpers';
export const PAGE = gql`
	fragment linkFragment on Link {
		id
		label
		target {
			__typename
			... on Page {
				id
				slug
			}
			... on BlogPost {
				id
				slug
			}
		}
	}

	query ($slug: String!) {
		page(where: { slug: $slug }) {
			id
			slug
			modules {
				__typename
				... on AssetLink {
					id
					headline
					downloadlinkLabel
					assetPicker {
						url
					}
				}
				... on Divider {
					id
					padding
				}
				... on CtaLink {
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
				... on AccordionContainer {
					id
					headline
					paddingTop
					paddingBottom
					accordionItems {
						id
						headline
						content {
							html
						}
					}
				}
				... on Image {
					id
					image {
						id
						url
					}
					imageWidth
					paddingTop
					paddingBottom
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
					link {
						...linkFragment
					}
					paddingTop
					paddingBottom
					text {
						html
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
				... on BlogPost {
					id
					slug
					teaserHeadline
					teaserSubheadline
					teaserText
					heroBackgroundImage {
						url
					}
				}
				... on ReferencesContainer {
					id
					referenceItems {
						id
						referenceLogo {
							id
							url
						}
					}
				}
			}
		}
	}
`;
