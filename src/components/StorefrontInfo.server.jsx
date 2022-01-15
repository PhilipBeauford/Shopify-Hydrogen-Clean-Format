import ExternalIcon from "./Externalcon.server";


export default function StorefrontInfo({shopName, totalProducts, totalCollections}) {
    const pluralize = (count, noun, suffix = 's') =>
      `${count} ${noun}${count === 1 ? '' : suffix}`;
    return (
      <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900">
        <p className="text-md font-medium uppercase mb-4">Connected Storefront</p>
        <h2 className="text-2xl font-bold mb-4">{shopName}</h2>
        <p className="text-md">
          {pluralize(totalProducts, 'Product')}
          {', '}
          {pluralize(totalCollections, 'Collection')}
        </p>
        {totalProducts === 0 && totalCollections === 0 && (
          <div className="py-2 px-3 bg-red-100 text-md">
            Use the{' '}
            <a
              href="https://shopify.dev/apps/tools/cli/getting-started"
              className="text-primary font-mono font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              Shopify CLI
            </a>{' '}
            to populate sample products and collections.
          </div>
        )}
        <hr className="my-4" />
        <a
          href="https://shopify.dev/custom-storefronts/hydrogen/getting-started#update-information-about-your-shopify-storefront"
          className="text-md inline-flex items-center text-blue-700 font-medium hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Change your storefront access token
          <ExternalIcon />
        </a>
      </div>
    );
  }