$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$BundledNode = "C:\Users\sheaw\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$SystemNode = (Get-Command node -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty Source)

if (Test-Path $BundledNode) {
  $Node = $BundledNode
} elseif ($SystemNode) {
  $Node = $SystemNode
} else {
  throw "Node.js was not found on this device."
}

Set-Location $ProjectRoot
Write-Host "Starting Walk With God at http://127.0.0.1:4173"
& $Node server.js
