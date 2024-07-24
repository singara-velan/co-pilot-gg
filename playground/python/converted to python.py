import requests

def get_api_response(url):
    """Makes a GET request to the specified URL and returns the response."""
    return requests.get(url)

def process_response(response):
    """Processes the API response, printing the data or an error message."""
    if response.status_code != 200:
        print(f"API call failed with status code: {response.status_code}")
    else:
        print(response.json())

if __name__ == "__main__":
    api_url = "https://jsonplaceholder.typicode.com/users"
    response = get_api_response(api_url)
    process_response(response)