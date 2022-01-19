import { gql } from '$lib/helpers';
export const BLOG_POST = gql`
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
		blogPost(where: { slug: $slug }) {
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
