import {useShopQuery, flattenConnection, Link} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import DocsButton from './DocsButton.server';
import StorefrontInfo from './StorefrontInfo.server';
import TemplateLinks from './TemplateLinks.server';


//A server component that displays the content on the homepage of the Hydrogen app
export default function Welcome() {
  const {data} = useShopQuery({query: QUERY});
  const shopName = data ? data.shop.name : '';
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);

  const firstProduct = products && products.length ? products[0].handle : '';
  const totalProducts = products && products.length;
  const firstCollection = collections[0] ? collections[0].handle : '';
  const totalCollections = collections && collections.length;

  return (
    <div className="text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Hello, Hydrogen
        </h1>
        <p className="text-lg mb-8">
          Welcome to your custom storefront. Let&rsquo;s get building.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-gray-700">
          <DocsButton
            url="https://shopify.dev/custom-storefronts/hydrogen"
            label="Browse Hydrogen documentation"
          />
          <DocsButton url="/graphql" label="Open the GraphiQL explorer" />
          <DocsButton
            url="https://github.com/Shopify/hydrogen-examples"
            label="Explore Hydrogen examples"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <StorefrontInfo
          shopName={shopName}
          totalProducts={totalProducts}
          totalCollections={totalCollections}
        />
        <TemplateLinks
          firstProductPath={firstProduct}
          firstCollectionPath={firstCollection}
        />
      </div>
    </div>
  );
}

const QUERY = gql`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
