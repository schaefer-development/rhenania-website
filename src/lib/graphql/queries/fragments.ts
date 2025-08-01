import { gql } from '$lib/helpers';
export const textAndImageFragment = gql`
	fragment textAndImageFragment on TextAndImage {
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
`;

export const accordingContainerFragment = gql`
	fragment accordingContainerFragment on AccordionContainer {
		id
		headline
		introOptional {
			html
		}
		paddingTop
		paddingBottom
		accordionItems {
			id
			headline
			heading1
			heading2
			heading3
			content {
				html
				text
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
			textAndImages {
				...textAndImageFragment
			}
		}
	}
`;

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
		title
		description
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
				...textAndImageFragment
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
				...accordingContainerFragment
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
				paddingTop
				paddingBottom
				text {
					json
					references {
						... on BlogPost {
							id
							slug
						}
						... on Page {
							id
							slug
						}
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
			... on BlogPost {
				id
				slug
				blogpostTitle
				blogpostMetaDescription
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
		blogpostTitle
		blogpostMetaDescription
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
				headline
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
				paddingTop
				paddingBottom
				text {
					json
					references {
						... on BlogPost {
							id
							slug
						}
						... on Page {
							id
							slug
						}
					}
				}
			}
			... on TextAndImage {
				...textAndImageFragment
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
				...accordingContainerFragment
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
