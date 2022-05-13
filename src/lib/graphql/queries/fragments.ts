import { gql } from '$lib/helpers';
export const linkFragment = gql`
	fragment linkFragment on Link {
		__typename
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
`;

export const pageFragment = gql`
	fragment pageFragment on Page {
		__typename
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
			... on TextAndImage {
				id
				heading1
				heading2
				heading3
				text {
					html
				}
				image {
					id
					url
				}
				textImageOrientation
				downloadLabel
				assetPicker {
					url
				}
				paddingTop
				paddingBottom
			}
			... on CtaLink {
				id
				headline
				padding
			}
			... on Eyecatcher {
				id
				headline
				subheadline
				link {
					...linkFragment
				}
				paddingTop
				paddingBottom
				image {
					id
					url
				}
			}
			... on PartnerContainer {
				id
				partnerItems {
					id
					partnerLogo {
						id
						url
					}
					partnerDescription {
						html
					}
				}
			}
			... on AccordionContainer {
				id
				headline
				paddingTop
				paddingBottom
				accordionItems {
					id
					heading1
					heading2
					heading3
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
						linkToId
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
`;

export const blogPostFragment = gql`
	fragment blogPostFragment on BlogPost {
		__typename
		id
		slug
		teaserHeadline
		teaserSubheadline
		teaserText
		heroBackgroundImage {
			url
		}
		modules {
			__typename
			... on Divider {
				id
				padding
			}
			... on CtaLink {
				id
				padding
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
			... on AccordionContainer {
				id
				headline
				paddingTop
				paddingBottom
				accordionItems {
					id
					heading1
					heading2
					heading3
					content {
						html
					}
					image {
						id
						url
					}
					textImageOrientation
					downloadLabel
					assetPicker {
						url
					}
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
						linkToId
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
`;
