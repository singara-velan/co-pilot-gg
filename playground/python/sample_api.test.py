import unittest
from unittest.mock import patch, Mock
from sample_api import fetch_users  # Adjust the import path as necessary

class TestFetchUsers(unittest.TestCase):

    @patch('sample_api.requests.get')
    def test_fetch_users_success(self, mock_get):
        # Mock the JSON response and status code for a successful API call
        mock_get.return_value = Mock(status_code=200)
        mock_get.return_value.json.return_value = [{"id": 1, "name": "John Doe"}]

        response = fetch_users()
        self.assertEqual(response, [{"id": 1, "name": "John Doe"}])

    @patch('sample_api.requests.get')
    def test_fetch_users_failure(self, mock_get):
        # Simulate a request exception (e.g., a network error)
        mock_get.side_effect = requests.exceptions.RequestException("Network error")

        response = fetch_users()
        self.assertTrue("error" in response)
        self.assertEqual(response["error"], "Network error")

if __name__ == '__main__':
    unittest.main()