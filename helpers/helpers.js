exports.STORES = {
    'https://test-matias.myshopify.com': `https://${process.env.SHOPIFY_APY_KEY}:${process.env.SHOPIFY_APY_SECRET}@test-matias.myshopify.com/admin/api/2021-07/`,
    'https://test-lea.myshopify.com': `https://${process.env.SHOPIFY_APY_KEY}:${process.env.SHOPIFY_APY_SECRET}@test-lea.myshopify.com/admin/api/2021-07/`
}
            
exports.allowlist = ['https://test-matias.myshopify.com'];