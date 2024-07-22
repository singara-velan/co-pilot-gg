import unittest
from unittest.mock import patch
import api  # Assuming the provided script is saved as api.py

class TestAPICall(unittest.TestCase):
    @patch('api.requests.get')
    def test_api_call_success(self, mock_get):
        # Mock the response to simulate a successful API call
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {'message': 'success'}

        # Capture the output of the print statement
        with self.assertLogs(level='INFO') as log:
            api.response = mock_get(api.api_url)
            api.print(response.json())

        # Check if the success message is in the logs
        self.assertIn('success', log.output[0])

    @patch('api.requests.get')
    def test_api_call_failure(self, mock_get):
        # Mock the response to simulate a failed API call
        mock_get.return_value.status_code = 404

        # Capture the output of the print statement
        with self.assertLogs(level='INFO') as log:
            api.response = mock_get(api.api_url)
            api.print(f"API call failed with status code: {response.status_code}")

        # Check if the failure message is in the logs
        self.assertIn('API call failed with status code: 404', log.output[0])

if __name__ == '__main__':
    unittest.main()