#!/bin/bash

echo "🧹 Cleaning up unnecessary processes and ports..."

# Kill old duplicate extension hosts (keep the newest one)
echo "Checking for duplicate extension hosts..."
EXTENSION_HOSTS=($(ps -eo pid,lstart,cmd | grep "extensionHost" | grep -v grep | sort -k3 | awk '{print $1}'))

if [ ${#EXTENSION_HOSTS[@]} -gt 1 ]; then
    echo "Found ${#EXTENSION_HOSTS[@]} extension hosts, keeping the newest one..."
    # Kill all but the last (newest) one
    for ((i=0; i<${#EXTENSION_HOSTS[@]}-1; i++)); do
        echo "Killing old extension host: ${EXTENSION_HOSTS[i]}"
        pkill -P ${EXTENSION_HOSTS[i]} 2>/dev/null
        kill ${EXTENSION_HOSTS[i]} 2>/dev/null
    done
else
    echo "✅ Only one extension host found, no cleanup needed"
fi

# Kill any Python HTTP servers (often forgotten)
HTTP_SERVERS=$(ps aux | grep "python.*http.server" | grep -v grep | awk '{print $2}')
if [ ! -z "$HTTP_SERVERS" ]; then
    echo "Killing Python HTTP servers: $HTTP_SERVERS"
    echo $HTTP_SERVERS | xargs kill 2>/dev/null
fi

# Show current listening ports
echo ""
echo "📊 Current listening ports:"
ss -tuln | grep LISTEN | awk '{print $5}' | sort | uniq

echo ""
echo "✅ Port cleanup complete!"