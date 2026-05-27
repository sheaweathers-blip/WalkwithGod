@echo off
cd /d "%~dp0"
if exist "C:\Users\sheaw\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
  "C:\Users\sheaw\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" server.js
) else (
  node server.js
)
