#!/usr/bin/env bash
# Пересобирает все редакторы скинов в бандлы и публикует на GitHub Pages
# (ветка gh-pages репо weeusle/wlab). Запуск: bash /home/am/wlab-pages/redeploy.sh
set -e
PAGES=/home/am/wlab-pages
VITE="node node_modules/vite/bin/vite.js build --base=./"

build_one() {
  local dir="$1" name="$2"
  echo "=== build $name ==="
  cd "$dir"
  $VITE >/tmp/redeploy_$name.log 2>&1 || { echo "BUILD FAIL $name — см. /tmp/redeploy_$name.log"; return 1; }
  rm -rf "$PAGES/$name"; mkdir -p "$PAGES/$name"
  cp -r dist/* "$PAGES/$name/"
  for j in defaultSettings.json formSettings.json; do [ -f "$dir/$j" ] && cp "$dir/$j" "$PAGES/$name/"; done
  echo "OK $name"
}

build_one "/home/am/wlab/new widgets/Wheel/skin2" "wheel-skin2"
for s in skin1 skin2 skin3 skin4; do
  build_one "/home/am/wlab/new widgets/Cookies/$s" "cookies-$s"
done
for s in skin1 skin2; do
  build_one "/home/am/wlab/new widgets/Buttons/$s" "buttons-$s"
done
build_one "/home/am/wlab/new widgets/Messengers/skin3"                "messengers-skin3"
build_one "/home/am/wlab/new widgets/Messengers/messengers-skin5-dev" "messengers-skin5"

cd "$PAGES"
git add -A
if git diff --cached --quiet; then echo "нет изменений — публиковать нечего"; exit 0; fi
git -c commit.gpgsign=false commit -q -m "Update widget skin editors"
GIT_SSH_COMMAND="ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new" git push origin gh-pages
echo "✅ опубликовано → https://weeusle.github.io/wlab/"
