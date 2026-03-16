// Shopify Storefront API client
// TODO: Replace with real token from Abearica

const SHOPIFY_STORE_URL = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'webearish.myshopify.com';
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '';

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        url: string;
        altText: string;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: {
          amount: string;
        };
      };
    }[];
  };
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  if (!STOREFRONT_TOKEN) {
    console.log('Shopify Storefront token not set — using placeholder products');
    return [];
  }

  const response = await fetch(`https://${SHOPIFY_STORE_URL}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query: `{
        products(first: 20, query: "tag:autism-acceptance") {
          edges {
            node {
              id
              title
              description
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    }),
  });

  const data = await response.json();
  return data.data?.products?.edges?.map((e: any) => e.node) || [];
}

export async function createCheckout(variantId: string, quantity: number = 1): Promise<string> {
  if (!STOREFRONT_TOKEN) return '#';

  const response = await fetch(`https://${SHOPIFY_STORE_URL}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query: `mutation {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${variantId}", quantity: ${quantity} }]
        }) {
          checkout {
            webUrl
          }
          checkoutUserErrors {
            message
          }
        }
      }`,
    }),
  });

  const data = await response.json();
  return data.data?.checkoutCreate?.checkout?.webUrl || '#';
}
