#!/usr/bin/env bash


languages=$(echo "typescript rust golang javascript" | tr " " "\n")
core_utils=$(echo "find xargs sed awk" | tr " " "\n")
selected=$(echo -e "$languages\n$core_utils" | fzf)

read -p "Query:" query

if echo "$languages" | grep -qs $selected; then
#  curl cht.sh/$selected/$(echo "$query" | tr ' ' '+')
    query=`echo $query | tr ' ' '+'`
    tmux split-window -p 50 -h bash -c "curl cht.sh/$selected/$query | less"

else
  #curl cht.sh/$selected~$query
  tmux neww bash -c "curl -s cht.sh/$selected~$query | less"
fi
