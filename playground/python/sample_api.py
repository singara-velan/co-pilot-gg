import requests

def fetch_users(api_url="https://jsonplaceholder.typicode.com/users"):
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Raises an exception for 4XX/5XX errors
        return response.json()  # Return the JSON response
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}  # Return error information