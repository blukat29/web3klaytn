curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/subbridge/txPendingCount' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "subbridge_txPendingCount",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
