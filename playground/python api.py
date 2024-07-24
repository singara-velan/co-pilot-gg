import requests

# Set the API URL
api_url = "https://jsonplaceholder.typicode.com/users"

# Make the GET request to the API
api_response = requests.get(api_url)

# Check if the request was successful
if api_response.status_code != 200:
    print(f"API call failed with status code: {api_response.status_code}")
else:
    # Print the response content
    print(api_response.json())