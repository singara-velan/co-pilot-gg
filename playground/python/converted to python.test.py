import unittest
from unittest.mock import patch
import converted_to_python

class TestAPIFunctions(unittest.TestCase):

    @patch('converted_to_python.requests.get')
    def test_get_api_response_success(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {"key": "value"}
        response = converted_to_python.get_api_response("dummy_url")
        self.assertEqual(response.status_code, 200)

    @patch('converted_to_python.requests.get')
    def test_get_api_response_failure(self, mock_get):
        mock_get.return_value.status_code = 404
        response = converted_to_python.get_api_response("dummy_url")
        self.assertEqual(response.status_code, 404)

    @patch('builtins.print')
    def test_process_response_success(self, mock_print):
        class MockResponse:
            status_code = 200
            @staticmethod
            def json():
                return {"key": "value"}
        converted_to_python.process_response(MockResponse())
        mock_print.assert_called_with({"key": "value"})

    @patch('builtins.print')
    def test_process_response_failure(self, mock_print):
        class MockResponse:
            status_code = 404
        converted_to_python.process_response(MockResponse())
        mock_print.assert_called_with("API call failed with status code: 404")

if __name__ == '__main__':
    unittest.main()