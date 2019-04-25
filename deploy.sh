npm run build
aws s3 rm s3://reppenhagen-space --recursive
aws s3 sync ./build s3://reppenhagen-space
aws cloudfront create-invalidation --distribution-id E3L1YBZQ2GG3LS --paths "/*"