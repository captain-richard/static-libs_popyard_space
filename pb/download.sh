curl -fL -o prebid.js \
  -H 'Content-Type: application/x-www-form-urlencoded' -X POST \
  -d "version=10.8.0" \
  -d "modules=appnexusBidAdapter" \
  -d "modules=pubmaticBidAdapter" \
  -d "modules=openxBidAdapter" \
  -d "modules=rubiconBidAdapter" \
  https://js-download.prebid.org/download

