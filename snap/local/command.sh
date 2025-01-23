#!/bin/bash -e
exec "$SNAP/desktop-init.sh" "$SNAP/desktop-common.sh" "$SNAP/desktop-gnome-specific.sh" "$SNAP/linux-unpacked/glowing-bear" "$@" --no-sandbox
