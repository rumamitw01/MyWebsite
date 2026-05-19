$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8002/")
$listener.Start()
Write-Host "Listening on port 8002..."

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath.Replace("/", "\")
        if ($localPath -eq "\") { $localPath = "\index.html" }
        
        $filePath = Join-Path $PWD $localPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            switch ($ext) {
                ".html" { $mime = "text/html" }
                ".css" { $mime = "text/css" }
                ".js" { $mime = "application/javascript" }
                ".json" { $mime = "application/json" }
                ".png" { $mime = "image/png" }
                ".jpg" { $mime = "image/jpeg" }
                ".ico" { $mime = "image/x-icon" }
            }
            
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
