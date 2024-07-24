import pytest
from unittest.mock import patch
import api

# Test for successful API response
@patch('api.requests.get')
def test_api_success(mock_get):
    # Mock the response to simulate a successful API call
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {'message': 'success'}
    
    # Use a context manager to capture the output
    with pytest.raises(SystemExit) as e:
        with patch('sys.stdout') as fake_out:
            api.main()  # Assuming your API call logic is in a function called main()
            assert fake_out.write.call_args_list[0][0][0] == "{'message': 'success'}\n"

# Test for failed API response
@patch('api.requests.get')
def test_api_failure(mock_get):
    # Mock the response to simulate a failed API call
    mock_get.return_value.status_code = 404
    
    # Use a context manager to capture the output
    with pytest.raises(SystemExit) as e:
        with patch('sys.stderr') as fake_err:
            api.main()  # Assuming your API call logic is in a function called main()
            assert "API call failed with status code: 404" in fake_err.write.call_args_list[0][0][0]