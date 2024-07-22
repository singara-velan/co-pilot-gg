import requests

# Set the API URL
api_url = "https://jsonplaceholder.typicode.com/users"

# Make the GET request to the API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code != 200:
    print(f"API call failed with status code: {response.status_code}")
else:
    # Print the data from the response
    print(response.json())