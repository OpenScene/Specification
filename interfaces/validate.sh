#!/bin/bash

TSC=${TSC:-$(which tsc)}
if [ -z "$TSC" ]; then
  echo >&2 "error: Missing tsc command."
  exit 1
fi

$TSC *.ts
