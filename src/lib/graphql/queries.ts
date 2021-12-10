import { gql } from '$lib/helpers';
export const START = gql`
{
	page(where:{slug:"start"}) {
	  id
	  modules{
			 __typename
		... on Divider{
		  padding
		}
		... on Eyecatcher{
		  headline
		  subheadline
		  image {
			id
			url
		  }
		}
		... on Faq{
		  question
		  answer{
			markdown
		  }
		}
		... on HeroImage{
		  image{
			id
			url
		  }
		  icon{
			id
			url
		  }
		}
		...on ArticleHeroTeaser{
		  headline
		  subheadline
		  teaserText
		  heroBackgroundImage{
			id
			url
		  }
		}
			  ... on CardsContainer{
		  headline
		  cards{
			__typename
			... on CardImage{
			  image{
				id
				url
			  }
			  headline
			}
		  }
		}
	  }
	}
  }
`;
