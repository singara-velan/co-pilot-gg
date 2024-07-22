[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls --bar [Net.SecurityProtocolType]::Tls11 -bar [Net.SecurityProtocolType]::Tls12

$apiUrl = "https://dummy.restapiexample.com/api/v1/employees"

$apiResponse = Invoke-RestMethod -Uri $apiUrl -Method Get

if($apiResponse.status -ne 200) {
    Write-Host "API call failed with status code: $($apiResponse.status)"
}

Write-Host $apiResponse.data