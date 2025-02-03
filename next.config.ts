const buildVersion = process.env.NEXT_PUBLIC_BUILD_VERSION || 'v1';
const s3BucketUrl = process.env.NEXT_PUBLIC_S3_BUCKET_URL;

module.exports = {
  output: 'standalone',
  assetPrefix: `${s3BucketUrl}/${buildVersion}`,
  // Optional: If you're using images
  images: {
    domains: ['your-bucket-name.s3.your-region.amazonaws.com'],
    unoptimized: true // Required for S3 hosting
  }
};